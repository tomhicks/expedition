/** @jsx React.DOM */
var React = require('react');
var ScenarioList = require('./scenario-list');

var Feature = React.createClass({
  displayName: 'Feature',

  getInitialState: function () {
    return {
      open: this.props.feature.result.status === 'failed'
    };
  },

  render: function () {
    var feature = this.props.feature;
    var displayStyle = this.state.open ? {} : { display: 'none' };

    return (
      <li
        className={"b-feature b-feature_result_" + feature.result.status}
      >
        <h2
          className={"b-feature__name b-feature__name_result_" + feature.result.status + ' block_' + (this.state.open ? 'open' : 'closed')}
          onClick={this.toggleShowChildren}
        >
          Feature: {feature.name}
        </h2>
        <div style={displayStyle}>
          <ScenarioList scenarios={feature.elements} keyPrefix={feature.name}/>
        </div>
      </li>
    );
  },

  toggleShowChildren: function () {
    this.setState({
      open: !this.state.open
    });
  }
});

module.exports = Feature;
