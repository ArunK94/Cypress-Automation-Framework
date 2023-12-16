/// <reference types="Cypress" />
import AppointmentPOM from "../pageObjects/Appointmentpom"

describe('Appointment Listing Page', function() {
   let appt=null;
      beforeEach(function() {
         appt= new AppointmentPOM();
         cy.fixture('login').then(function(data)
         {
          this.data=data;
         })

        
      })
       it('To test the landing to Appointment listing page: ', function() {
         cy.logintoCRM(this.data.url,this.data.correctusername, this.data.correctpassword);
         cy.log("Landed on Appointment listing page")
         appt.getPracticename().then(function(name)
         {
           let practname= name.text();
           cy.log("Practice name is "+practname)
           expect(practname).to.include("ProScan Imaging");
         })
         
         //  cy.url().should('include', 'subscriber/reporting')
         appt.getListtext().then(function(headtext){
            let header=headtext.text();
            expect(header).include("List of Appointments");
         })
         appt.getImage().should('be.visible')
        })

        it('To test the extend of Table button and label check:', function(){
         cy.logintoCRM(this.data.url,this.data.correctusername, this.data.correctpassword);
         appt.getPracticename().should('have.text','ProScan Imaging');
         
         appt.getTableFilter().click()
        appt.getTableFilter().then(function(tabletext){

            let tabletext1=tabletext.text();
            expect(tabletext1).include("Table Filters");
         })
         appt.getTableFilter().should('have.attr','aria-expanded','true')
        // cy.get('')

        })

        it('To test the Options present on Table Filter:', function(){
         cy.logintoCRM(this.data.url,this.data.correctusername, this.data.correctpassword);
         appt.getPracticename().should('have.text','ProScan Imaging');
         appt.getTableFilter().click();
         cy.get("#patfnsearch").type('Patricia');
         cy.get('#patlnsearch').type('BISHOP');
         cy.get('#patdobsearch').type('11/07/1964');
         cy.get(':nth-child(1) > :nth-child(1) > .row > :nth-child(2) > .form-group > .btn-group > .btn').click();
         cy.get(':nth-child(1) > :nth-child(1) > .row > :nth-child(2) > .form-group > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a').click();
         cy.get('#daterange-btn').click();
         cy.get('.ranges > ul > :nth-child(8)').click();
      //   cy.get('.applyBtn').click();
         cy.get('#search').click();
         cy.get(':nth-child(2) > .row > .col-md-5 > .btn').click();
        })

      //   afterEach(function() {
      //     cy.clearLocalStorage();
      
      //   })
        
    })