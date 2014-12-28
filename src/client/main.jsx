'use strict';
require('./reset.css');
require('./expedition.scss');

var R = require('ramda');

var React = require('react');
var FeatureList = require('./steps/feature-list');

var features = require('./data/cucumber.json');

var ExpeditionApp = React.createClass({
  displayName: 'ExpeditionApp',
  render: function () {
    return (
      <FeatureList
        features = {this.props.features}
      />
    );
  }
});

var formatter = require('./data/summarizer');

features = features.map(formatter.removeBackground);
features = features.map(function (feature) {
  feature.result = formatter.getResult(feature);
  return feature;
});
console.log(features);

React.render(<ExpeditionApp
  features = {features}
/>, document.body);
