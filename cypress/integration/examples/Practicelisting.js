/// <reference types="Cypress" />
import Homepage from "../pageObjects/Homepage"
describe('Practice Listing Page verification', function() {
let home=null;
  beforeEach(function() {
     home=new Homepage();
     cy.fixture('example').then(function(data)
     {
      this.data=data;
     })
    
  })

    it('To verify the search on practice listing from IBM: ', function() {

       // home.getLogin();
       cy.logintoCRM(this.data.url,this.data.correct_username, this.data.correct_password);
        home.selectPracticename('string:15').should('have.value','string:15');
        home.selectPracticename('string:65').should('have.value','string:65');
        home.selectPracticename('string:62').should('have.value','string:62');
        home.selectPracticename('string:3').should('have.value','string:3');
        home.getTextfield().type(this.data.practicename);
        cy.wait(1000);
        /*cy.get('input[ng-model="searchPartner"]').then(function(name)
        {
          const Pracname=name.text();
          cy.log(Pracname);
          expect(Pracname).to.include("Radiology Regional");
        })   */ 
         cy.log("TEST 1");
       home.getpracticelisting().each(($e1, index, $list) =>
        {
          const practice=$e1.text();
          cy.get('tr td:nth-child(2)').then(function(practemail)
            { 
              const email= practemail.text();
              expect(email).to.include("agrabarczyk2@radiologyregional.com");
            });
        } 
        )
        })

     it('To check availble UI fields on Practice Listing page: ', function() {

      cy.logintoCRM(this.data.url,this.data.correct_username, this.data.correct_password);
      home.getOpendrLogo().should('be.visible')
      home.getListPractice().should('contain','List of Practices');
      home.getUserType().should('contain','crm');

     })


     it('To test the clicks on Manage Partner', function(){
    
      cy.logintoCRM(this.data.url,this.data.correct_username, this.data.correct_password);
      home.getManagePartnerbutton().click();
      home.getListPractice().should('contain','CRM');
      home.getBackbutton().should('contain','Back')
      home.getBackbutton().click();

     })

     it('To test the clicks on Add Practice:', function(){
    
      cy.logintoCRM(this.data.url,this.data.correct_username, this.data.correct_password);
      home.getAddPracticebutton().click();
      home.getAddPracticeHeader().should('contain','Add Practice');
      cy.get('.dropdown-toggle.btn.btn-default.btn-sm').click();
      cy.get('.glyphicon.glyphicon-log-in').click();

     })
})