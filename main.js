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


      // Click on the view inventory button 
      it('Click On View Inventory Button', async function() {
        await driver.get("http://localhost:3000/inventory");
        driver.findElement(By.id('viewInv')).click();
      });


      it('Open App Bar Drawer', async function() {
        // route to apps home dashboard
        await driver.get("http://localhost:3000/inventory/view-inventory");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('openMenuDrawer')).click();
      });



      it('Click On Inventory Button', async function() {
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('invButton')).click();
      });


      // Click on the view inventory button 
      it('Click On Edit Inventory Button', async function() {
        await driver.get("http://localhost:3000/inventory");
        driver.findElement(By.id('updateInv')).click();
      });


      it('Open App Bar Drawer', async function() {
        // route to apps home dashboard
        await driver.get("http://localhost:3000/inventory/update-inventory");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('openMenuDrawer')).click();
      });


      /**
       * CUSTOMERS
       */


      it('Click On Customers Button', async function() {
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('custButton')).click();
      });


      it('Click On Add Customer Button', async function() {
        await driver.get("http://localhost:3000/customers");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('addCust')).click();
      });


      it('Open App Bar Drawer', async function() {
        // route to apps home dashboard
        await driver.get("http://localhost:3000/customers/add-customer");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('openMenuDrawer')).click();
      });



      it('Click On Customer Button', async function() {
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('custButton')).click();
      });


      // Click on the view inventory button 
      it('Click On View Customers Button', async function() {
        await driver.get("http://localhost:3000/customers");
        driver.findElement(By.id('viewCust')).click();
      });


      it('Open App Bar Drawer', async function() {
        // route to apps home dashboard
        await driver.get("http://localhost:3000/customers/list-customers");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('openMenuDrawer')).click();
      });



      it('Click On Customers Button', async function() {
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('custButton')).click();
      });


      // Click on the view inventory button 
      it('Click On Edit Customers Button', async function() {
        await driver.get("http://localhost:3000/customers");
        driver.findElement(By.id('updateCust')).click();
      });


      it('Open App Bar Drawer', async function() {
        // route to apps home dashboard
        await driver.get("http://localhost:3000/inventory/edit-customers");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('openMenuDrawer')).click();
      });



      /**
       * INSPECTIONS
       */


      it('Click On Inspections Button', async function() {
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('inspectButton')).click();
      });


      it('Click On Submit Inspection Button', async function() {
        await driver.get("http://localhost:3000/inspections");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('submitInsp')).click();
      });


      it('Open App Bar Drawer', async function() {
        // route to apps home dashboard
        await driver.get("http://localhost:3000/inspections/submit-inspection");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('openMenuDrawer')).click();
      });



      it('Click On Inspections Button', async function() {
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('inspectButton')).click();
      });


      // Click on the view inspections button 
      it('Click On View Inspections Button', async function() {
        await driver.get("http://localhost:3000/inspections");
        driver.findElement(By.id('viewInsp')).click();
      });


      it('Open App Bar Drawer', async function() {
        // route to apps home dashboard
        await driver.get("http://localhost:3000/inspections/view-inspections");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('openMenuDrawer')).click();
      });



      it('Click On Inspections Button', async function() {
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('inspectButton')).click();
      });


      // Click on the view inventory button 
      it('Click On Edit Inspections Button', async function() {
        await driver.get("http://localhost:3000/inspections");
        driver.findElement(By.id('updateInsp')).click();
      });


      it('Open App Bar Drawer', async function() {
        // route to apps home dashboard
        await driver.get("http://localhost:3000/inspections/edit-inspections");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('openMenuDrawer')).click();
      });


      /**
       * SHIFTS
       */


      it('Click On Shifts Button', async function() {
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('shiftsButton')).click();
      });


      it('Click On Add Material Button', async function() {
        await driver.get("http://localhost:3000/shifts");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('addCust')).click();
      });


      it('Open App Bar Drawer', async function() {
        // route to apps home dashboard
        await driver.get("http://localhost:3000/customers/add-customer");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('openMenuDrawer')).click();
      });



      it('Click On Shifts Button', async function() {
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('shiftsButton')).click();
      });


      // Click on the view inventory button 
      it('Click On View Inventory Button', async function() {
        await driver.get("http://localhost:3000/customers/list-customers");
        driver.findElement(By.id('viewCust')).click();
      });


      it('Open App Bar Drawer', async function() {
        // route to apps home dashboard
        await driver.get("http://localhost:3000/customers/edit-customers");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('openMenuDrawer')).click();
      });



      it('Click On Shifts Button', async function() {
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('shiftsButton')).click();
      });


      // Click on the view inventory button 
      it('Click On Edit Inventory Button', async function() {
        await driver.get("http://localhost:3000/inventory");
        driver.findElement(By.id('updateCust')).click();
      });


      it('Open App Bar Drawer', async function() {
        // route to apps home dashboard
        await driver.get("http://localhost:3000/inventory/update-inventory");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('openMenuDrawer')).click();
      });



      /**
       * PART SETUP
       */


      it('Click On Parts Setup Button', async function() {
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('partSetupButton')).click();
      });


      it('Click On Add Material Button', async function() {
        await driver.get("http://localhost:3000/part-setup");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('addPart')).click();
      });


      it('Open App Bar Drawer', async function() {
        // route to apps home dashboard
        await driver.get("http://localhost:3000/customers/add-customer");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('openMenuDrawer')).click();
      });



      it('Click On Parts Setup Button', async function() {
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('partSetupButton')).click();
      });


      // Click on the view inventory button 
      it('Click On View Inventory Button', async function() {
        await driver.get("http://localhost:3000/customers/list-customers");
        driver.findElement(By.id('viewCust')).click();
      });


      it('Open App Bar Drawer', async function() {
        // route to apps home dashboard
        await driver.get("http://localhost:3000/customers/edit-customers");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('openMenuDrawer')).click();
      });



      it('Click On Parts Setup Button', async function() {
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('partSetupButton')).click();
      });


      // Click on the view inventory button 
      it('Click On Edit Inventory Button', async function() {
        await driver.get("http://localhost:3000/inventory");
        driver.findElement(By.id('updateCust')).click();
      });


      it('Open App Bar Drawer', async function() {
        // route to apps home dashboard
        await driver.get("http://localhost:3000/inventory/update-inventory");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('openMenuDrawer')).click();
      });



      /**
       * USER MANAGEMENT
       */


      it('Click On User Management Button', async function() {
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('adminUserMgtButton')).click();
      });


      it('Click On Add User Button', async function() {
        await driver.get("http://localhost:3000/user-mgt");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('addCust')).click();
      });


      it('Open App Bar Drawer', async function() {
        // route to apps home dashboard
        await driver.get("http://localhost:3000/customers/add-customer");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('openMenuDrawer')).click();
      });



      it('Click On User Management Button', async function() {
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('adminUserMgtButton')).click();
      });


      // Click on the view inventory button 
      it('Click On View Inventory Button', async function() {
        await driver.get("http://localhost:3000/customers/list-customers");
        driver.findElement(By.id('viewCust')).click();
      });


      it('Open App Bar Drawer', async function() {
        // route to apps home dashboard
        await driver.get("http://localhost:3000/customers/edit-customers");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('openMenuDrawer')).click();
      });



      it('Click On User Management Button', async function() {
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('adminUserMgtButton')).click();
      });


      // Click on the view inventory button 
      it('Click On Edit Inventory Button', async function() {
        await driver.get("http://localhost:3000/inventory");
        driver.findElement(By.id('updateCust')).click();
      });


      it('Open App Bar Drawer', async function() {
        // route to apps home dashboard
        await driver.get("http://localhost:3000/inventory/update-inventory");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('openMenuDrawer')).click();
      });




    // close the browser after running tests
    after(() => driver && driver.quit());
})