/** @jsx React.DOM */
require('./summary-table.scss');

var React = require('react');
var R = require('ramda');

var SummaryChart = require('./summary-chart');

function percentage (fraction, precision) {
  return (fraction * 100).toFixed(precision || 0) + '%';
}

var resultOrder = ['passed', 'failed', 'undefined', 'pending', 'skipped'];

var ByResult = React.createClass({
    displayName: 'ByResult',
    render: function () {

      var total = R.reduce(R.add, 0, R.map(R.prop('count'), this.props.results));
      var onlyResultsWithCounts = R.filter(
        R.compose(R.lt(0), R.prop('count'))
      , this.props.results);

      function successRate (results, total) {
        var successResult = R.find(R.compose(R.eq('passed'), R.prop('name')), results);
        return successResult ? successResult.count / total : 0;
      }

      var elementSuccessRate = successRate(onlyResultsWithCounts, total);

      var resultClass = elementSuccessRate === 1 ? 'passed' : 'failed';

      return (
        <div className="b-by-result">
          <SummaryChart
            results = {onlyResultsWithCounts}
            total = {total}
          />
          <h2 className="b-by-result__header">
            <span className="b-by-result__header__count">{total + " "}</span>{this.props.elementName}
            <span className={"b-by-result__header__percentage b-by-result__header__percentage_result_" + resultClass}>
              {percentage(elementSuccessRate)}
            </span>
          </h2>
        </div>
      );
    }
});

var TestSummary = React.createClass({
    displayName: 'TestSummary',
    render: function () {
        var features = this.props.features;
        var scenarios = R.flatten(R.map(R.prop('elements'), this.props.features));
        var steps = R.flatten(R.map(R.prop('steps'), scenarios));

        var byStatus = R.groupBy(R.path('result.status'));

        function statisfy (elements) {
          return R.map(function (resultName) {
            var group = byStatus(elements)[resultName];
            return {
              name: resultName,
              count: group ? group.length : 0
            };
          }, resultOrder);
        }

        return (
          <div className="b-element-summaries">
            <ByResult
              elementName = {'features'}
              results = {statisfy(features)}
            />
            <ByResult
              elementName = {'scenarios'}
              results = {statisfy(scenarios)}
            />
            <ByResult
              elementName = {'steps'}
              results = {statisfy(steps)}
            />
          </div>
        );
    }
});

module.exports = TestSummary;
