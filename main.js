require('dotenv').config();
const driver = require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');




describe('Log Into ShopStream', function () {
    let driver;


    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });


    it('Login to ShopStream', async function() {
        // Load the page
        await driver.get('http://localhost:3000/#');
    });


    /**
     * Enter Email in Login page.
     */
    it('Enter Email', async function() {
        // enter email
        driver.findElement(By.id('email')).sendKeys(process.env.EMAIL);
    });


    /**
     * Enter Password in Login page.
     */
    it('Enter password', async function() {
        // enter password
        driver.findElement(By.id('password')).sendKeys('Password');
    });


    /**
     * Click Login Button on Login page.
     * Submits the Login form.
     */
    it('Submit Login Form', async function() {
        // submit login form
        driver.findElement(By.id('signin')).click();
    });




    // close the browser after running tests
    // after(() => driver && driver.quit());
})