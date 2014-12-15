/** @jsx React.DOM */
var React = require('react');
var StepList = require('./step-list');
var ScreenshotThumbnail = require('./screenshot-thumbnail');

var Scenario = React.createClass({
  displayName: 'Scenario',

  getInitialState: function () {
    return {
      open: false
    };
  },

  render: function () {
    var scenario = this.props.scenario;
    var screenshot;

    var displayStyle = this.state.open ? {} : { display: 'none' };

    if (scenario.screenshot) {
      screenshot = <ScreenshotThumbnail screenshot={scenario.screenshot} />
    }

    return (
      <li className={"b-scenario b-scenario_result_" + scenario.result}>
        <h3
          className={"b-scenario__name b-scenario__name_result_" + scenario.result + ' block_' + (this.state.open ? 'open' : 'closed')}
          onClick={this.toggleShowChildren}
        >
          Scenario: {scenario.name}
        </h3>
        <div style={displayStyle}>
          <StepList steps={scenario.steps} keyPrefix={this.props.keyPrefix}/>
          {screenshot}
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

module.exports = Scenario;
