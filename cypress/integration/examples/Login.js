/// <reference types="Cypress" />
import { includes } from "lodash";
import Login from "../pageObjects/Loginpom.js"

describe('CRM Login page', function() {
let loginPom=null;
  beforeEach(() => {
    loginPom= new Login();
    cy.fixture('example').then(function(data)
    {
      this.data=data;
    })
  });

  it('To verify the Placeholder on Username and Password text field:', function() {
    //cy.visit("https://portaltest.opendr.com/");
    loginPom.getURL();
    loginPom.getHomevalidation().should('contain','Home');
    loginPom.getOverviewvalidation().should('contain','Overview');
    loginPom.getAboutvalidation().should('contain','About');
    loginPom.getLoginclick().click();
    cy.wait(3000);
    loginPom.getUsername().invoke('attr', 'placeholder').should('eq', 'Email Address')
    loginPom.getPassword().should('have.attr','placeholder','Password');
    
    })

    
  it('To verify the Username and Password with correct data:', function() {
loginPom.getURL();
loginPom.getHomevalidation().then(function(mouseText)
{
  cy.log(" Text is:"+mouseText.text());
})
loginPom.getHomevalidation().should('contain','Home');
loginPom.getOverviewvalidation().should('contain','Overview');
loginPom.getAboutvalidation().should('contain','About');
loginPom.getLoginclick().click();
cy.wait(3000);
loginPom.getUsername().type(this.data.correct_username);
loginPom.getPassword().type(this.data.correct_password);
cy.wait(2000);
loginPom.getSubmitClick().click();
loginPom.getPracticepage().should('have.text','List of Practices');

})
    
it('To verify the Username and Password with correct data added:', function() {
loginPom.getURL();
loginPom.getHomevalidation().then(function(mouseText)
{
  cy.log(" Text is:"+mouseText.text());
})
loginPom.getHomevalidation().should('contain','Home');
loginPom.getOverviewvalidation().should('contain','Overview');
loginPom.getAboutvalidation().should('contain','About');
loginPom.getLoginclick().click();
cy.wait(3000);
loginPom.getUsername().type(this.data.correct_username);
loginPom.getPassword().type(this.data.correct_password);
cy.wait(2000);
loginPom.getSubmitClick().click();
loginPom.getPracticepage().should('have.text','List of Practices');

})

it('To verify the incorrect username and password on login page:', function() {
  loginPom.getURL();
  loginPom.getHomevalidation().should('have.text','Home');
  loginPom.getOverviewvalidation().should('have.text','Overview');
  loginPom.getAboutvalidation().should('have.text','About');
  loginPom.getLoginclick().click();
  cy.wait(3000);
  loginPom.getUsername().type(this.data.incorrect_username);
  loginPom.getPassword().type(this.data.incorrect_password);
  cy.wait(2000);
  loginPom.getSubmitClick().click();
  loginPom.getEmailAlertmessage().should('have.text',' Oops! Try again.');
  loginPom.getPasswordAlertmessage().should('have.text',' Invalid password. Please try again.');
 
  })

  it('To verify blank Username and Password on login page:', function() {
    loginPom.getURL();
    loginPom.getHomevalidation().should('have.text','Home');
    loginPom.getOverviewvalidation().should('have.text','Overview');
    loginPom.getAboutvalidation().should('have.text','About');
    loginPom.getLoginclick().click();
    cy.wait(3000);
    loginPom.getSubmitClick().click();
    cy.wait(2000);
   // loginPom.getEmailBlankalert().should('have.text',' Forgetting something? Hint: Email Address.');
   // loginPom.getPasswdBlankalert().should('have.text',' Forgetting something? Hint: Password.');
 
    loginPom.getEmailBlankalert().then(function(alert)
    {
      let message=alert.text();
      cy.log("Alert message: "+message)
      expect(message).to.equal(" Forgetting something? Hint: Email Address.")
    })
     
    loginPom.getPasswdBlankalert().then(function(alert2){
       let message2=alert2.text();
      cy.log("Alert message: "+message2)
      expect(message2).to.equal(" Forgetting something? Hint: Password.")
    })
    })

  })