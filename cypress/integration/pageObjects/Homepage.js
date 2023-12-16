/// <reference types="cypress"/>
// const constants = require('C:\Users\Arun\CypressAutomation\cypress\integration\examples');
// const waitTimeout = constants.WAIT_TIMEOUT;
export default class Homepage {
getLogin()
{    
    cy.visit("https://portaltest.opendr.com/");
    cy.get('.login-btn > a').click();
    cy.get('#username').type("akamath@opendr.com");
    cy.get('input[ng-model="password"]').type("Opendr@123");
    cy.get('#loginForm > .margin-0 > .btn').click();
}    
practvalue=null;
selectPracticename(practvalue)
{
    return cy.get('select[id="search"]',{ timeout: 10000 }).select(practvalue);
} 

getTextfield(){
    return cy.get('input[ng-model="searchPartner"]');
}

getpracticelisting(){
    return cy.get('tr td:nth-child(1)')
}

getOpendrLogo(){
    return cy.get(".openDoc");
}

getListPractice(){
    return cy.get("div h2[style='margin-left:3px;']");
}

getUserType(){
    return cy.get(".text-gray");
}
    
getManagePartnerbutton(){
    return cy.get('.btn.btn-primary.btn-sm.linktext');
}
getBackbutton(){
    return cy.get('.topbtn > .btn');
}
getAddPracticebutton(){
    return cy.get('[href="/signup/subscriber/step1/partner/1"]');
}
getAddPracticeHeader(){
    return cy.get('h2');
}

}
