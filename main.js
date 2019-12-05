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
    it('Enter Username', async function() {
        // enter email
        driver.findElement(By.id('username')).sendKeys("melinb");
    });


    /**
     * Enter Password in Login page.
     */
    it('Enter Password', async function() {
        // enter password
        driver.findElement(By.id('password')).sendKeys('Augsburg');
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
    

    it('Add New Job To DB', async function() {
      await driver.get("http://localhost:3000/jobs/create-job");
      /**
       * Fill In Form Input and Submit
       */
      driver.findElement(By.id('orderDate')).sendKeys("12122019");
      driver.findElement(By.id('dueDate')).sendKeys("12122019");
      driver.findElement(By.id('poNum')).sendKeys("test");
      driver.findElement(By.id('jobNum')).sendKeys("test");
      driver.findElement(By.id('partNum')).sendKeys("test");
      driver.findElement(By.id('orderQuant')).sendKeys("test");
      driver.findElement(By.id('recievedQuant')).sendKeys("test");
      driver.findElement(By.id('remainingQuant')).sendKeys("test");
      driver.findElement(By.id('cycleTime')).sendKeys("test");
      driver.findElement(By.id('runHours')).sendKeys("test");
      driver.findElement(By.id('runDays')).sendKeys("test");
      driver.findElement(By.id('amountTotal')).sendKeys("test");
      driver.findElement(By.id('amountPerHour')).sendKeys("test");
      driver.findElement(By.id('amountPerUnit')).sendKeys("test");
      driver.findElement(By.id('mmeNotes')).sendKeys("test");
    });


    it('Submit Create Job Form', async function() {
      // submit create job form
      driver.findElement(By.id('submitOrder')).click();
  });
    


    /**
     * Click the main menu drawer button to test that it opens.
     */
    it('Open App Bar Drawer', async function() {
        // // route to apps home dashboard
        // await driver.get("http://localhost:3000/jobs/create-job");
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


      it('Click On Add Shift Button', async function() {
        await driver.get("http://localhost:3000/shifts");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('addShift')).click();
      });


      it('Open App Bar Drawer', async function() {
        // route to apps home dashboard
        await driver.get("http://localhost:3000/shifts/add-shift");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('openMenuDrawer')).click();
      });



      it('Click On Shifts Button', async function() {
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('shiftsButton')).click();
      });


      // Click on the view inventory button 
      it('Click On View Shifts Button', async function() {
        await driver.get("http://localhost:3000/shifts");
        driver.findElement(By.id('viewShifts')).click();
      });


      it('Open App Bar Drawer', async function() {
        // route to apps home dashboard
        await driver.get("http://localhost:3000/customers/view-shifts");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('openMenuDrawer')).click();
      });



      it('Click On Shifts Button', async function() {
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('shiftsButton')).click();
      });


      // Click on the view inventory button 
      it('Click On Edit Shifts Button', async function() {
        await driver.get("http://localhost:3000/shifts");
        driver.findElement(By.id('editShifts')).click();
      });


      it('Open App Bar Drawer', async function() {
        // route to apps home dashboard
        await driver.get("http://localhost:3000/shifts/edit-shifts");
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


      it('Click On Add New Part Setup Button', async function() {
        await driver.get("http://localhost:3000/part-setup");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('addPart')).click();
      });


      it('Open App Bar Drawer', async function() {
        // route to apps home dashboard
        await driver.get("http://localhost:3000/part-setup/new-part-setup");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('openMenuDrawer')).click();
      });



      it('Click On Parts Setup Button', async function() {
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('partSetupButton')).click();
      });


      // Click on the view inventory button 
      it('Click On View Part Setups Button', async function() {
        await driver.get("http://localhost:3000/part-setup");
        driver.findElement(By.id('viewPartSetups')).click();
      });


      it('Open App Bar Drawer', async function() {
        // route to apps home dashboard
        await driver.get("http://localhost:3000/part-setup/view-part-setups");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('openMenuDrawer')).click();
      });



      it('Click On Parts Setup Button', async function() {
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('partSetupButton')).click();
      });


      // Click on the view inventory button 
      it('Click On Edit Part Setups Button', async function() {
        await driver.get("http://localhost:3000/part-setups");
        driver.findElement(By.id('editPartSetups')).click();
      });


      it('Open App Bar Drawer', async function() {
        // route to apps home dashboard
        await driver.get("http://localhost:3000/part-setup/edit-part-setups");
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
        driver.findElement(By.id('addUser')).click();
      });


      it('Open App Bar Drawer', async function() {
        // route to apps home dashboard
        await driver.get("http://localhost:3000/user-mgt/create-user");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('openMenuDrawer')).click();
      });



      it('Click On User Management Button', async function() {
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('adminUserMgtButton')).click();
      });


      // Click on the view inventory button 
      it('Click On View Users Button', async function() {
        await driver.get("http://localhost:3000/user-mgt");
        driver.findElement(By.id('viewUsers')).click();
      });


      it('Open App Bar Drawer', async function() {
        // route to apps home dashboard
        await driver.get("http://localhost:3000/user-mgt/view-users");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('openMenuDrawer')).click();
      });



      it('Click On User Management Button', async function() {
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('adminUserMgtButton')).click();
      });


      // Click on the view inventory button 
      it('Click On Edit Users Button', async function() {
        await driver.get("http://localhost:3000/user-mgt");
        driver.findElement(By.id('editUsers')).click();
      });


      it('Open App Bar Drawer', async function() {
        // route to apps home dashboard
        await driver.get("http://localhost:3000/user-mgt/edit-users");
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('openMenuDrawer')).click();
      });


      it('Click On Main Dashboard Button', async function() {
        // open main menu drawer on left side of dashboard
        driver.findElement(By.id('dashButton')).click();
      });




    // close the browser after running tests
    after(() => driver && driver.quit());
})