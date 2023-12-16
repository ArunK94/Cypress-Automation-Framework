/// <reference types="cypress"/>
class Loginpom{

//================================Locators====================================//
url = "https://portaltest.opendr.com/";
homeval = 'a[class="active"]';
getoverviewval = 'a[href="/overview"]';
getaboutVal = 'a[href="/aboutus"]';
getloginclk = '.login-btn > a';
getusrname = '#username';
getPasswd = 'input[ng-model="password"]';
getclick = '#loginForm > .margin-0 > .btn';
getpractice = 'h2[style="margin-left:3px;"]';
getalertmes = 'label[ng-show="username_error_msg"]';
getpassmes = 'label[ng-show="password_error_msg"]';
getemailblank = '[ng-show="loginForm.username.$error.required && subLogin"]';
getpassblank = '[ng-show="loginForm.password.$error.required && subLogin"]';





getURL(){
        return cy.visit(this.url);
    }
   
getHomevalidation(){
    return cy.get(this.homeval)
}

getOverviewvalidation(){
    return cy.get(this.getoverviewval)
}

getAboutvalidation(){
    return cy.get(this.getaboutVal)
}

getLoginclick(){
    return cy.get(this.getloginclk)
}

getUsername(){
    return cy.get(this.getusrname)
}

getPassword(){
    return cy.get(this.getPasswd)
}
getSubmitClick(){
    return cy.get(this.getclick)
}

getPracticepage(){

    return cy.get(this.getpractice)
}

getEmailAlertmessage(){
    return cy.get(this.getalertmes)
}
getPasswordAlertmessage(){
    return cy.get(this.getpassmes)
}

getEmailBlankalert(){

    return cy.get(this.getemailblank)
}
getPasswdBlankalert(){

    return cy.get(this.getpassblank)
}

}
export default Loginpom;