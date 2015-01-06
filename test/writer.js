var expect = require('chai').expect;
var sinon = require('sinon');
var path = require('path');

var rewire = require('rewire');

// allow expect(x).to.be.something type assertions
// jshint expr:true

function getFakeFs () {
  return {
    copy: sinon.spy(function (from, to, callback) {
      callback(null);
    }),
    readFile: require('fs-extra').readFile,
    outputFile: sinon.spy(function (filename, contents, callback) {
      callback(null);
    })
  };
}

var WEBPACK_DEV_SCRIPT = '<script src="/webpack-dev-server.js"></script>';

describe('Report Writer', function () {
  describe('when I write report data with a known directory', function () {

    var w;
    var Writer;
    var fs;
    var finishedWriting;

    beforeEach(function (done) {
      Writer = rewire('../src/writer');

      finishedWriting = sinon.stub();
      fs = getFakeFs();
      Writer.__set__('fs', fs);

      w = Writer({
        dir: '/my/dir'
      });

      w.writeReport(['my', 'features', 'array'], function () {
        finishedWriting();
        done();
      });
    });

    it('should write the templated file to the correct location', function () {
      expect(fs.outputFile.called).to.be.true;
      expect(fs.outputFile.firstCall.args[0]).to.equal(
        '/my/dir/index.html'
      );
    });

    it('should include the _cucumberFeatures variable assignment', function () {
      expect(fs.outputFile.firstCall.args[1]).to.contain(
        'var _cucumberFeatures = ["my","features","array"]'
      );
    });

    it('should not include the webpack-dev-server live reload script', function () {
      expect(fs.outputFile.firstCall.args[1]).to.not.contain(WEBPACK_DEV_SCRIPT);
    });

    it('should copy the build assets to the output directory', function () {
      expect(fs.copy.calledOnce).to.be.true;
      expect(fs.copy.firstCall.args[0]).to.equal(
        path.resolve(__dirname, '../build')
      );

      expect(fs.copy.firstCall.args[1]).to.equal(
        path.join('/my/dir', 'build')
      );
    });

    it('should call completion callback', function () {
      expect(finishedWriting.calledOnce).to.be.true;
    });
  });

  describe('when I write the report in dev mode', function () {

    var w;
    var Writer;
    var fs;
    var finishedWriting;

    beforeEach(function (done) {
      Writer = rewire('../src/writer');

      finishedWriting = sinon.stub();
      fs = getFakeFs();
      Writer.__set__('fs', fs);

      w = Writer({
        dir: '/my/dir',
        dev: true
      });

      w.writeReport(['my', 'features', 'array'], function () {
        finishedWriting();
        done();
      });
    });

    it('should contain the webpack-dev-server live reload script', function () {
      expect(fs.outputFile.firstCall.args[1]).to.contain(WEBPACK_DEV_SCRIPT);
    });
  });

});
