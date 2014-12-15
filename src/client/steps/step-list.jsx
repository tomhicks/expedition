/** @jsx React.DOM */
var React = require('react');
var Step = require('./step');

var StepList = React.createClass({
    displayName: 'StepList',
    render: function () {
      var steps = this.props.steps.map(function (step, index) {
        var key = this.props.keyPrefix + step.name + index;

        return <Step step={step} key={key}/>
      }.bind(this));

      return (
        <ul className="b-step-list">
          {steps}
        </ul>
      );
    }
});

module.exports = StepList;
