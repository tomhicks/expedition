/** @jsx React.DOM */
var React = require('react');
var Scenario = require('./scenario');

var ScenarioList = React.createClass({
  displayName: 'ScenarioList',
  render: function () {
    var scenarios = this.props.scenarios.map(function (scenario) {
      var key = this.props.keyPrefix + scenario.name;
      return <Scenario scenario={scenario} key={key} keyPrefix={key}/>
    }.bind(this));

    return (
      <ul className="b-scenario-list">
        {scenarios}
      </ul>
    );
  }
});

module.exports = ScenarioList;
