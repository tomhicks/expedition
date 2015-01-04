'use strict';

var fs = require('fs');
var path = require('path');

var fsExtra = require('fs-extra');
var R = require('ramda');
var Handlebars = require('handlebars');

Handlebars.registerHelper('json', function(obj) {
    return JSON.stringify(obj);
});

var defaults = {
  dir: './report',
  dev: false
};

module.exports = function Writer(options) {

  var config = R.mixin(defaults, options);

  return {
    writeReport: function (reportData, done) {
      fs.readFile(__dirname + '/template.handlebars', function (err, file) {
        var template = Handlebars.compile(file.toString());

        var templateData = {
          features: reportData,
          dev: !!config.dev
        };

        fsExtra.outputFile(path.join(config.dir, 'index.html'), template(templateData), function () {
          fsExtra.copy(
            path.resolve(path.join(__dirname, '../build')),
            path.join(config.dir, 'build'),
            done
          );
        });
      });
    }
  };
};
