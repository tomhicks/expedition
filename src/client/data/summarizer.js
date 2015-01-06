'use strict';

var R = require('ramda');

var statusPriority = {
  passed: 10,
  skipped: 20,
  pending: 25,
  undefined: 28,
  failed: 30
};

function aggregateStatus(oldStatus, newStatus) {
  return (statusPriority[newStatus] > statusPriority[oldStatus]) ? newStatus : oldStatus;
}

var summarizer = {
  removeBackground: function (feature) {
    var isBackgroundElement = R.where({type: 'background'});
    feature.elements = R.filter(R.not(isBackgroundElement), feature.elements);

    return feature;
  },

  getResult: function (element) {
    if (element.result) {
      return element.result;
    } else {
      element.result = R.reduce(function (total, child) {
        if (!child.result) {
          child.result = summarizer.getResult(child);
        }

        return {
          duration: (total.duration || 0) + (child.result.duration || 0),
          status: aggregateStatus(total.status || 'passed', child.result.status || 'passed')
        };
      }, {duration: 0, status: ''}, element.steps || element.elements);
      return element.result;
    }
  }
};

module.exports = summarizer;
