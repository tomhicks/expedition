/** @jsx React.DOM */
var React = require('react');

var Step = React.createClass({
  displayName: 'Step',
  render: function () {
    var step = this.props.step;
    return (
      <li className={"b-step b-step_result_" + step.result.status}>
        <h3 className={"b-step__name  b-step__name_result_" + step.result.status}>
          <span className="b-step__keyword">{step.keyword}</span>
          <span className="b-step__definition">{step.name}</span>
        </h3>
      </li>
    );
  }
});

module.exports = Step;
