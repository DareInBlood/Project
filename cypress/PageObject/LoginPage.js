class Login{


    get inputUser(){
        return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input');
    }

    get inputPassword(){

        return cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input');
    }


    get clickLogin(){

        return cy.get('.oxd-button');
    }


    enterUser(username){
        this.inputUser.type(username);
    }

    enterPassword(password){

        this.inputPassword.type(password);
    }

    clickButton(){
        this.clickLogin.click();
    }

}

export default new Login();