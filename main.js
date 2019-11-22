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


    /**
     * After logged in, change route to the apps home dashboard.
     * Click the main menu drawer button to test that it opens.
     */
    it('Open App Bar Drawer', async function() {
        // route to apps home dashboard
        await driver.get("http://localhost:3000/dashboard");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('openMenuDrawer')).click();
      });
  


    it('Click On Jobs Button', async function() {
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('jobsButton')).click();
      });



    it('Click Create Jobs Button', async function() {
        // route to Jobs Page
        await driver.get("http://localhost:3000/jobs");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('createJob')).click();
      });


    /**
     * Click the main menu drawer button to test that it opens.
     */
    it('Open App Bar Drawer', async function() {
        // route to apps home dashboard
        await driver.get("http://localhost:3000/jobs/create-job");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('openMenuDrawer')).click();
      });



      it('Click On Jobs Button', async function() {
        driver.findElement(By.id('jobsButton')).click();
      });


      it('Click View Jobs Button', async function() {
        // route to Jobs Page
        await driver.get("http://localhost:3000/jobs");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('viewJobs')).click();
      });
      

      it('Open App Bar Drawer', async function() {
        // route to apps home dashboard
        await driver.get("http://localhost:3000/jobs/view-jobs");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('openMenuDrawer')).click();
      });


      it('Click On Jobs Button', async function() {
        driver.findElement(By.id('jobsButton')).click();
      });


      it('Click Edit Jobs Button', async function() {
        // route to Jobs Page
        await driver.get("http://localhost:3000/jobs");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('editJobs')).click();
      });


      it('Open App Bar Drawer', async function() {
        // route to apps home dashboard
        await driver.get("http://localhost:3000/jobs/edit-jobs");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('openMenuDrawer')).click();
      });



      it('Click On Inventory Button', async function() {
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('invButton')).click();
      });


      it('Click On Add Material Button', async function() {
        await driver.get("http://localhost:3000/inventory");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('addInv')).click();
      });


      it('Open App Bar Drawer', async function() {
        // route to apps home dashboard
        await driver.get("http://localhost:3000/inventory/add-inventory");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('openMenuDrawer')).click();
      });



      it('Click On Inventory Button', async function() {
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('invButton')).click();
      });


      //End Script for now.  Adding more soon.
      it('Click On Inventory Button', async function() {
        await driver.get("http://localhost:3000/inventory");
      });


    // close the browser after running tests
    after(() => driver && driver.quit());
})