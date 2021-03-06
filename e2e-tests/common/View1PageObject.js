module.exports = class View1PageObject {
  constructor(options) {
    this.url = options ? options.url : "";
  }

  get() {   
    browser.get(this.url);
  }

  getRenderedElement(params) {   
    return element.all(by.css(params)).first();
  }
};