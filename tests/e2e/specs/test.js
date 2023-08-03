// https://docs.cypress.io/api/table-of-contents

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Your Vue.js App')
  });

  it('Visit about route', ()=>{
    cy.get('[href="/about"]').click();
    cy.get('h1').contains('Bienvenidos a la página de about');
  })


})
