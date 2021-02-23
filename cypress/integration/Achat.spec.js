describe('path', () => {

    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/')
    })

    it.skip('signUp', () => {
         var username = cy.faker.name.firstName()
         var password = cy.faker.internet.password()

        cy.get('#signin2').click({force: true})
        cy.get('#sign-username').type(username)
        cy.wait(2000)
        cy.get('#sign-password').type(password)
        cy.get('[onclick="register()"]').click({ force: true })
    })

    it('logIn', () => {
        cy.get('#login2').click({force: true})
        cy.wait(2000)
        cy.fixture('login').then((login) => {
        cy.get('#loginusername').type(login.username, { delay: 200 })
        cy.get('#loginpassword').type(login.password, { delay: 100 })
     })

       cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({force : true})
        cy.wait(2000)
        cy.contains('Welcome Jean').should('be.visible')
        cy.contains("Laptops").click({force : true})
        cy.get('[href="prod.html?idp_=15"]').eq(1).click()
        cy.url().should('contain','prod.html?idp_=15')
        cy.contains('Add to cart').click()
        cy.wait(2000)
         cy.get('#cartur').click()
         cy.contains('MacBook Pro').should('be.exist')
         cy.get('#logout2').click()

        }) 

    
})