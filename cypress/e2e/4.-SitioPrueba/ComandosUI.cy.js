describe("pruebas para UI", ()=>{
    beforeEach( ()=>{
        cy.visit("https:///the-internet.herokuapp.com/")
    })
         
    /*
    it('Ejemplo de click', () => {
      cy.contains("Add/Remove Elements").click()   
      cy.get('button').click()
      cy.get('.added-manually').click() 
    })
    */

    it('Ejemplo de escritura', () => {
        cy.contains("Form Authentication").click()
        cy.get('#username').type("tomsmith")

    });


})