describe('Registration test bez obaveznog polja', () => {
  const name = 'Djordje'
  const password = 'Test1234'
  let email

  before(() => {})

  beforeEach(() => {
    email = `djordjetest${Date.now()}@gmail.com`
  })
  it('ID-1 Successful registration with user', () => {
    cy.visit('https://automationexercise.com')

    cy.contains('Signup').should('be.visible').click()
    cy.get('[data-qa="signup-name"]').should('be.visible').clear().type(name)
    cy.get('[data-qa="signup-email"]').should('be.visible').clear().type(email)
    cy.get('[data-qa="signup-button"]').should('be.visible').click()

    cy.get('.login-form').should('be.visible')
    cy.url().should('contain', '/signup')
    cy.get('#id_gender1').should('be.visible').check()

    cy.get('[data-qa="name"]').should('be.visible').and('have.value', name)

    cy.get('[data-qa="email"]').should('be.visible').and('have.value', email)

    cy.get('[data-qa="password"]').should('be.visible').clear().type(password)

    cy.get('[data-qa="days"]').should('be.visible').select(19)

    cy.get('[data-qa="months"]').should('be.visible').select('January')

    cy.get('[data-qa="years"]').should('be.visible').select('1998')

    cy.contains('label', 'Sign up for our newsletter').click()

    cy.get('[data-qa="first_name"]')
      .should('be.visible')
      .clear()
      .type('Djordje')
    cy.get('[data-qa="last_name"]')
      .should('be.visible')
      .clear()
      .type('Bilanovic')

    cy.get('[data-qa="address"]').should('be.visible').clear().type('Gradiska')
    cy.get('[data-qa="country"]').should('be.visible').select('United States')
    cy.get('[data-qa="state"]').should('be.visible').clear().type('New York')
    cy.get('[data-qa="city"]').should('be.visible').clear().type('Buffalo')
    cy.get('[data-qa="zipcode"]').should('be.visible').clear().type('30405')
    cy.get('[data-qa="mobile_number"]')
      .should('be.visible')
      .clear()
      .type('001234567890')
    cy.get('[data-qa="create-account"]').should('be.visible').click()
    cy.get('[data-qa="continue-button"]').should('be.visible').click()
  })
})

it('ID-2 Registration without password should show validation message', () => {
  cy.visit('https://automationexercise.com')

  const email = `djordjetest${Date.now()}@gmail.com`

  cy.contains('Signup').should('be.visible').click()
  cy.get('[data-qa="signup-name"]').should('be.visible').clear().type('Djordje')
  cy.get('[data-qa="signup-email"]').should('be.visible').clear().type(email)
  cy.get('[data-qa="signup-button"]').should('be.visible').click()

  cy.get('.login-form').should('be.visible')
  cy.url().should('contain', '/signup')
  cy.get('#id_gender1').should('be.visible').check()

  cy.get('[data-qa="name"]').should('be.visible').and('have.value', 'Djordje')
  cy.get('[data-qa="email"]').should('be.visible').and('have.value', email)

  // Namjerno ne unosimo password

  cy.get('[data-qa="days"]').should('be.visible').select(19)
  cy.get('[data-qa="months"]').should('be.visible').select('January')
  cy.get('[data-qa="years"]').should('be.visible').select('1998')

  cy.get('[data-qa="first_name"]').should('be.visible').clear().type('Djordje')
  cy.get('[data-qa="last_name"]').should('be.visible').clear().type('Bilanovic')
  cy.get('[data-qa="address"]').should('be.visible').clear().type('Gradiska')
  cy.get('[data-qa="country"]').should('be.visible').select('United States')
  cy.get('[data-qa="state"]').should('be.visible').clear().type('New York')
  cy.get('[data-qa="city"]').should('be.visible').clear().type('Buffalo')
  cy.get('[data-qa="zipcode"]').should('be.visible').clear().type('30405')
  cy.get('[data-qa="mobile_number"]')
    .should('be.visible')
    .clear()
    .type('001234567890')

  cy.get('[data-qa="create-account"]').should('be.visible').click()

  // Provjera da browser prikazuje "Please fill out this field."
  cy.get('[data-qa="password"]').then(($input) => {
    expect($input[0].validationMessage).to.eq('Please fill out this field.')
  })
})
