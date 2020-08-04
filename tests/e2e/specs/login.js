// https://docs.cypress.io/api/introduction/api.html

describe('Login', () => {

  it('should see a login button', () => {
    cy.visit(`http://localhost:3000/login`)
    cy.get('form#login button.t-button').should('contain', 'Login')
  })

  it('should alert on input if no username was inserted', () => {
    cy.visit(`http://localhost:3000/login`)
    cy.get('form#login button.t-button').click()
    cy.get('.t-input__input--error')
  })

  it('should alert on input if no password was inserted', () => {
    cy.visit(`http://localhost:3000/login`)
    cy.get('input[name=username]').type('fake@email.com')
    cy.get('form#login button.t-button').click()
    cy.get('.t-input__input--error')
  })

  it('should alert on toast if no user found', () => {
    cy.visit(`http://localhost:3000/login`)
    cy.get('input[name=username]').type('fake@email.com')
    cy.get('input[name=password]').type(`FakeP4assword{enter}`)
    cy.get('.toastify')
  })

  it('should login', () => {
    // seed a user in the DB that we can control from our tests
    const users = [
      {id: "0py6us42m", name: "Renato Vicente", username: "revi66@hotmail.com", password: "123qwe"}
    ]
    cy.setLocalStorage("users", JSON.stringify(users))
    cy.visit(`http://localhost:3000/login`)
    cy.get('input[name=username]').type(users[0].username)
    cy.get('input[name=password]').type(`${users[0].password}{enter}`)
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/dashboard')
    })
  })
  
})
