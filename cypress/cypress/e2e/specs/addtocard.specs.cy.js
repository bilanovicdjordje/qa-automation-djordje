describe('Registration test', () => {
  const name = 'Djordje'
  const password = 'Test1234'
  let email

  before(() => {})

  beforeEach(() => {
    email = `djordjetest${Date.now()}@gmail.com`
  })
  it('ID-1 Add to cart test', () => {
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

    cy.get('[class="material-icons card_travel"]').should('be.visible').click()

    cy.get('[href="/product_details/2"]').should('be.visible').click()

    cy.get('[class="btn btn-default cart"]').should('be.visible').click()

    cy.contains('a', 'View Cart').click()

    cy.get('[class="btn btn-default check_out"]').should('be.visible').click()

    cy.get('[class="btn btn-default check_out"]').should('be.visible').click()

    cy.get('[data-qa="name-on-card"]').should('be.visible').clear().type('test')

    cy.get('[data-qa="card-number"]').should('be.visible').clear().type(1234)

    cy.get('[data-qa="cvc"]').should('be.visible').clear().type(123)

    cy.get('[data-qa="expiry-month"]').should('be.visible').clear().type(11)

    cy.get('[data-qa="expiry-year"]').should('be.visible').clear().type(2030)

    cy.get('[data-qa="pay-button"]').should('be.visible').click()

    cy.get('[class="btn btn-primary"]').should('be.visible').click()
  })
})
