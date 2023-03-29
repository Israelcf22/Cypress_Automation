describe('Home de www.frerangetesters.com', () => {
 

    beforeEach(() =>{
        cy.visit('https://www.freerangetesters.com/')
    })


   it('should have a tittle', () => {
    //cy.wait(6000)
    cy.title().should('include','Free Range Testers')
    cy.xpath('//*[@id="comp-l02x1m8d2label"]').click() 
    cy.contains('Iniciar Sesión').click()
    cy.contains
    
   });


}) 