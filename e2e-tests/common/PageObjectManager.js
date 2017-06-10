const HomepagePageObject = require('./HomepagePageObject');
const View1PageObject = require('./View1PageObject');
const View2PageObject = require('./View2PageObject');

class PageObjectManager {
    constructor() {
        this.pageObjects = [];
    }

    add(pageName, pageObject) {
        this.pageObjects.push({ pageName: pageName, pageObject: pageObject });

        return this;
    }

    get(pageName) {
        return this.pageObjects.find(function (item) {
            return item.pageName === pageName;
        });
    }
}

const pageObjectManager = new PageObjectManager();

pageObjectManager
    .add('homepage', HomepagePageObject)
    .add('view1', View1PageObject)
    .add('view2', View2PageObject);


module.exports = pageObjectManager;