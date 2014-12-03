'use strict';

var writer = require('../src/writer');
var data = require('./data/pass-fail');

writer().writeReport(data);
