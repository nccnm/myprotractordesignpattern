module.exports = class HomepagePageObject {
  constructor(options) {
    this.url = options ? options.url : "";
  }

  get() {   
    browser.get(this.url);
  }
 
};