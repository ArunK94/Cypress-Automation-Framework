/// <reference types="cypress"/>
class Appointmentpom{

     practName= ".hidden-xs.text-blue";
     getListname="div section h1";
     tablefilter=".col-sm-6 > .btn";
     getimg="img.NO-CACHE";

    getPracticename(){

        return cy.get(this.practName,{timeout: 10000});
    }

    getListtext(){
        return cy.get(this.getListname);
    }

    getTableFilter(){
        return  cy.get(this.tablefilter,{timeout: 10000});
    }

    getImage(){
        return cy.get(this.getimg);
    }





}
export default Appointmentpom;