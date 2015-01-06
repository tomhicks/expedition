'use strict';

var fs = require('fs-extra');
var path = require('path');

var Handlebars = require('handlebars');

Handlebars.registerHelper('json', function(obj) {
  return JSON.stringify(obj);
});

module.exports = function Writer(options) {

  function copyAssets(done) {
    return function () {
      fs.copy(
        path.resolve(path.join(__dirname, '../build')),
        path.join(options.dir, 'build'),
        done
      );
    };
  }

  return {
    writeReport: function (reportData, done) {
      fs.readFile(path.join(__dirname, 'template.handlebars'), function (err, file) {
        var template = Handlebars.compile(file.toString());

        var templateData = {
          features: reportData,
          dev: !!options.dev
        };

        fs.outputFile(path.join(options.dir, 'index.html'), template(templateData), copyAssets(done));
      });
    }
  };
};
