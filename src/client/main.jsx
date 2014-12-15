'use strict';
require('./reset.css');
require('./expedition.css');

var React = require('react');
var FeatureList = require('./steps/feature-list');

var ExpeditionApp = React.createClass({
  displayName: 'ExpeditionApp',
  render: function () {
    return (
      <FeatureList
        features = {this.props.features}
      >
        Hellos
      </FeatureList>
    );
  }
});

React.render(<ExpeditionApp
  features = {window._pioneerResults}
/>, document.body);
