describe('Home de www.frerangetesters.com', () => {
 

    beforeEach(() =>{
        cy.visit('https://www.freerangetesters.com/')
    })


   it('should have a tittle Free Range Testers', () => {
    //cy.wait(6000)
    cy.title().should('include','Free Range Testers')
    })
    
   it('Hay cursos con el boton VER MAS ', () => { 
    cy.get('#comp-l02x1m8d2label').click()
    cy.get('[data-testid="linkElement"] > .M3I7Z2').should('have.length', 12) 
   }); 

   it('el campo textbox del formulario llamado NOMBRE posee la clase KvoMHf has-custom-focus wixui-text-input__input  ', () => {
    cy.get('#input_comp-l1ed927d').should('have.class','KvoMHf has-custom-focus wixui-text-input__input')
     
   });

   it('Hay un link llamado Blog en la página Web', () => {
    cy.get('#comp-l02x1m8d1label').should('have.text', 'Blog')
    //cy.get('#comp-l02x1m8d1label').should('have.value', '4') ejemplo para buscar por valor
   });

   it('Encontrar un boton visible, en este caso el de Empezar a aprender  ', () => {
    //cy.wait(4000) EJEMPLO de wait 
    cy.get('#comp-krjarw4p > [data-testid="linkElement"] > .M3I7Z2').as('BotonEmpezar') //para ponerle un alias
    cy.get('BotonEmpezar').should('be.visible')
    //cy.get('#comp-krjarw4p > [data-testid="linkElement"] > .M3I7Z2').should('exist') para validar que el elemento exista
    //cy.get('#comp-krjarw4p > [data-testid="linkElement"] > .M3I7Z2').should('no. exist') para validar que el elemento NO exista
    //cy.get('#comp-krjarw4p > [data-testid="linkElement"] > .M3I7Z2').should('not.be.visible') para buscar elementos no visibles
   });

    it('Para revisar que un elemento está Checked', () => {
    cy.get('').should('be.checked')   
    cy.get('').find("[type=checkbox]").should('be.checked')//usar el metodo FIND,suele ser una manera de trabajar mas eficiente, por ejemplo buscando elementos muy metidos dentrod el DOM
   }); 

   it('Para revisar que un elemento está disable', () => {
        cy.get('').should('be.disabled')   
   });

});





    /*
    cy.xpath('//*[@id="comp-l02x1m8d2label"]').click() //se agrega programa para poder buscar por XPATH   npm install -D cypress-xpath
    cy.contains('Iniciar Sesión').click()  //busca por texto
    */
  