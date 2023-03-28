describe('Home de www.frerangetesters.com', () => {
 

    beforeEach(() =>{
        cy.visit('https://www.freerangetesters.com/')
    })


   it('should have a tittle', () => {
    //cy.wait(6000)
    cy.title().should('include','Free Range Testers')
    
   });


})