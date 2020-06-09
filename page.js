const {Builder, By, Key, util} = require("selenium-webdriver");
let driver = new Builder().forBrowser('chrome').build();

class Page{
    constructor(driver){
        
        //this.driver = driver;
        
        this.visit = function (url) {
        return driver.get(url);
        },

        this.pagequit = function () {
        return driver.quit();
        },

        this.findele = function (el) {
        driver.wait(until.elementlocated(By.id(el)), 5000);
        return driver.findElement(By.id(el));
        };

        this.findeles = function (el) {
        driver.wait(until.elementlocated(By.id(el)), 5000);
        return driver.findElements(By.id(el));
        };
        this.txtwrite = function (el, txt) {
        return this.findele(el).sendkeys(txt);
        }   
    }
}
module.exports = Page;