module.exports = class TestCase {
  constructor(pageObjectManager) {
    this.pageObjectManager = pageObjectManager;
    this.pageConfigs = {};
    this.lastStepResult = null;
    this.currentPage = null;
  }

  configPage(pageName, options) {
    const item = this.pageObjectManager.get(pageName);

    console.log('--- configPage ---');
    console.log('pageName is: ', pageName);
    console.log('options is: ', options);

    this.pageConfigs[pageName] = new item.pageObject(options);

    return this;
  }

  onPage(pageName) {
      this.currentPage = pageName;

      return this;
  }

  runStep(step) {
    const pageObject = this.pageConfigs[this.currentPage];

    if (!pageObject) {
        throw "Current page is null. You must call 'onPage' method before 'runStep'";
    }

    console.log('--- runStep ---');   
    console.log('step is: ', step);

    this.lastStepResult = pageObject[step.action](step.params);    

    return this;
  }

  expect(actual, expectAction, expected) {
    expect(actual.apply(this))[expectAction](expected);
  }
};