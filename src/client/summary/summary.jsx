/** @jsx React.DOM */
var React = require('react');
var R = require('ramda');

function percentage (fraction, precision) {
  return (fraction * 100).toFixed(precision || 0) + '%';
}

var ByResult = React.createClass({
    displayName: 'ByResult',
    render: function () {
        return (
          <div className="b-by-result">
            <h2 className="b-by-result__header">
              {this.props.elementName}: {this.props.elements.length}
            </h2>
            <ul className="b-by-result-groups">
              {this._renderGroups(this.props.elements)}
            </ul>
          </div>
        );
    },

    _renderGroups: function (groupedElements) {
      return R.mapObj.idx(function (elements, groupName, egg) {
        return (
          <li className={"b-by-result-group_result_" + groupName}>
            <span className="b-by-result-group__name">{groupName}: </span>
            <span className="b-by-result-group__count">{elements.length}
              <span className="b-by-result-group__percentage">
                ({percentage(elements.length / groupedElements.length)})
              </span>
            </span>
          </li>
        );
      }, R.groupBy(R.path('result.status'), groupedElements));
    }
});

var TestSummary = React.createClass({
    displayName: 'TestSummary',
    render: function () {
        var features = this.props.features;
        var scenarios = R.flatten(R.map(R.prop('elements'), this.props.features));
        var steps = R.flatten(R.map(R.prop('steps'), scenarios));

        return (
          <div>
            <div>Test Summary:</div>
            <ByResult
              elementName = {'Features'}
              elements = {features}
            />
            <ByResult
              elementName = {'Scenarios'}
              elements = {scenarios}
            />
            <ByResult
              elementName = {'Steps'}
              elements = {steps}
            />
          </div>
        );
    }
});

module.exports = TestSummary;
