/** @jsx React.DOM */
require('./summary-chart.scss');

var React = require('react');
var R = require('ramda');

function percentage (fraction, precision) {
  return (fraction * 100).toFixed(precision || 0) + '%';
}

var SummaryChart = React.createClass({
    displayName: 'SummaryChart',

    render: function () {
      return (
        <div className="b-summary-chart">
          {this._renderBars(this.props.results, this.props.total)}
        </div>
      );
    },

    _renderBars: function (results, total) {
      return R.map(function (result) {
        var style = {
          width: percentage(result.count / total, 5)
        };

        return (
          <div
            key = {result.name}
            style = {style}
            className = {"b-summary-chart__bar b-summary-chart__bar_result_" + result.name}
            title = {result.name}
          />
        );
      }, results);
    }
});

module.exports = SummaryChart;
