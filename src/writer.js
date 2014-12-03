'use strict';
var fs = require('fs');
var Handlebars = require('handlebars');

Handlebars.registerHelper('json', function(obj) {
    return JSON.stringify(obj);
});

module.exports = function () {
    return {
        writeReport: function (reportData) {
            var html = fs.readFileSync(__dirname + '/template.handlebars').toString();
            var template = Handlebars.compile(html);

            fs.writeFileSync('output.html', template(reportData));
        }
    };
};
