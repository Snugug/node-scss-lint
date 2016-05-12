'use strict';

var lint = require('./_lint');

//////////////////////////////
// SCSS syntax tests
//////////////////////////////
describe('no disallowed properties - scss', function () {
  var file = lint.file('no-disallowed-properties.scss');

  it('properties: [z-index]', function (done) {
    lint.test(file, {
      'no-disallowed-properties': [1, { properties: ['z-index'] }]
    }, function (data) {
      lint.assert.equal(1, data.warningCount);
      done();
    });
  });
});

//////////////////////////////
// Sass syntax tests
//////////////////////////////
describe('no disallowed properties - sass', function () {
  var file = lint.file('no-disallowed-properties.sass');

  it('properties: [z-index]', function (done) {
    lint.test(file, {
      'no-disallowed-properties': [1, { properties: ['z-index'] }]
    }, function (data) {
      lint.assert.equal(1, data.warningCount);
      done();
    });
  });
});
