import LoginPage from "../PageObject/LoginPage";



describe('Login Test', ()=>
{
    const siteUrl = "https://opensource-demo.orangehrmlive.com/";


    beforeEach(()=>{

        cy.visit(siteUrl)
        
        cy.wait(5000)

        cy.fixture('credentials').then((data)=>{

            const credentials =data;
            
            LoginPage.enterUser(credentials.username);
            LoginPage.enterPassword(credentials.password);
            LoginPage.clickButton();
            
        })
    })


    it('Validate Login', ()=>{


        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("have.text","Dashboard");



    })
})