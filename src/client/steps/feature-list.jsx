/** @jsx React.DOM */
var React = require('react');
var Feature = require('./feature');

var FeatureList = React.createClass({
  displayName: 'FeatureList',
  render: function () {
    var features = this.props.features.map(function (feature) {
      return <Feature feature={feature} key={feature.name}/>
    });

    return (
      <ul className="b-feature-list">
        {features}
      </ul>
    );
  }
});

module.exports = FeatureList;
