'use strict';

const pageObjectManager = require('./common/PageObjectManager');
const Step = require('./common/Step');
const TestCase = require('./common/TestCase');

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function () {


  it('should automatically redirect to /view1 when location hash/fragment is empty', function () {

    const testCase = new TestCase(pageObjectManager);

    testCase
      .configPage('homepage', { url: 'index.html' })
      .onPage('homepage')
      .runStep(new Step('get'))
      .expect(
      function () { return browser.getLocationAbsUrl(); },
      'toMatch',
      "/view1"
      );
  });


  describe('view1', function () {

    it('should render view1 when user navigates to /view1', function () {
      const testCase = new TestCase(pageObjectManager);

      testCase
        .configPage('view1', { url: 'index.html#!/view1' })
        .onPage('view1')
        .runStep(new Step('get'))
        .runStep(new Step('getRenderedElement', '[ng-view] p'))
        .expect(
        function () { return this.lastStepResult.getText(); },
        'toMatch',
        /partial for view 1/
        );
    });

  });


  describe('view2', function () {

    it('should render view2 when user navigates to /view2', function () {
      const testCase = new TestCase(pageObjectManager);

      testCase
        .configPage('view2', { url: 'index.html#!/view2' })
        .onPage('view2')
        .runStep(new Step('get'))
        .runStep(new Step('getRenderedElement', '[ng-view] p'))
        .expect(
        function () { return this.lastStepResult.getText(); },
        'toMatch',
        /partial for view 2/
        );
    });

  });
});
