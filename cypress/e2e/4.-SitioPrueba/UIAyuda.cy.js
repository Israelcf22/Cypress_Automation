describe("Pruebas sobre UI", ()=>{
    beforeEach( ()=> {
        cy.visit("https:///the-internet.herokuapp.com/")
    })

    /*
    it('Ejemplo de esperas', () => {
        cy.wait(10000)
        cy.contains("Challenging DOM").click()
    });
    */
    /*
    it('Nueva pestania', () => {
        cy.contains("Multiple Windows").click()
        cy.contains("Click Here").invoke('removeAttr','target').click() //esto lo que hace es removerle el atributo que hace que abra una nueva pestania 
        cy.contains('New Window').should('have.text','New Window')
    });
    */
    
    /*
    it('Shadow DOM', () => {
        cy.contains('Shadow DOM').click()
        cy.get('ul > :nth-child(2)').shadow().should('have.text','In a list')
        
    });
    */

    /*
    it('primer y ultimo elemento', () => {
        cy.contains('Dynamic Content').click()
       // cy.get('img').should('be.visible')
       // cy.get('img').first().should('be.visible') //para que me de el primer elemento de tipo img que este visible
       // cy.get('img').last().should('be.visible')//para que me de el ultimo  elemento de tipo img que este visible
        cy.get('img').eq(2).should('be.visible')// le indicop que me valide que este visible el segundo elemento tipo IMG
    });
    */

    /*
    it('Padres e hijos', () => {
        cy.contains('Dynamic Content').click()
        cy.get(':nth-child(4) > .large-2').parent()
        cy.get('.example > :nth-child(7)').children()
    }); 
    */

    it('Invoke', () => {
        cy.contains('Dynamic Content')
        .should('be.hidden')
        .invoke('show')  //Con la funcion SHOW nosotros podemos mostrar un elemento que se encuentre oculto 
        .should('be.visible')
    });
})