/** @jsx React.DOM */
var React = require('react');

var ScreenshotThumbnail = React.createClass({
  displayName: 'ScreenshotThumbnail',
  render: function () {
    return <img className="b-scenario__screenshot" src={this.props.screenshot.url} />
  }
});

module.exports = ScreenshotThumbnail;
