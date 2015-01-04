'use strict';
require('./style/reset.css');
require('./style/expedition.scss');

var R = require('ramda');

var React = require('react');
var FeatureList = require('./steps/feature-list');
var Summary = require('./summary/summary');

var features = window._cucumberFeatures || [];

var ExpeditionApp = React.createClass({
  displayName: 'ExpeditionApp',
  render: function () {
    return (
      <div>
        <Summary
          features = {this.props.features}
        />
        <FeatureList
          features = {this.props.features}
        />
      </div>
    );
  }
});

var formatter = require('./data/summarizer');

features = features.map(formatter.removeBackground);
features = features.map(function (feature) {
  feature.result = formatter.getResult(feature);
  return feature;
});

React.render(<ExpeditionApp
  features = {features}
/>, document.body);
