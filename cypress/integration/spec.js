/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('/cypress/fixtures/index.html')

    cy.fixture('example.json', { encoding: null }).as('file')
    cy.get('#file').selectFile('@file')

    cy.get('#file')
      .then((input) => {
        expect(input[0].files.length).to.eq(1)
        expect(input[0].files[0].name).to.eq('example.json')
        expect(input[0].files[0].type).to.eq('application/json')
      })
  })

  it('works on subsequent test', () => {
    cy.visit('/cypress/fixtures/index.html')

    cy.fixture('example.json', { encoding: null }).as('file')
    cy.get('#file').selectFile('@file')

    cy.get('#file')
      .then((input) => {
        expect(input[0].files.length).to.eq(1)
        expect(input[0].files[0].name).to.eq('example.json')
        expect(input[0].files[0].type).to.eq('application/json')
      })
  })
})
