describe('Funcionalidad: Crear tag', () => {

  let dataPool = {}

  //Login 
  beforeEach(() => {
    //Given I go to Login page
    cy.visit(Cypress.env('GHOST_LOGIN_URL'))
    cy.wait(5000)

    // And I load the pseudoaleatorio datapool.
    const url = Cypress.env('PSEUDO_ALEATORIO_DATAPOOLS')["TAGS"];
    cy.request(url).then((response) => {
      dataPool = response.body;
    });

    //And I fill input form with GHOST_USERNAME and GHOST_PASSWORD
    cy.get('input.gh-input.email').type(Cypress.env('GHOST_USERNAME'))
    cy.get('input.gh-input.password').type(Cypress.env('GHOST_PASSWORD'))
    cy.get('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view').click()
    cy.wait(2000)

    // And I wait for the dashboard to be visible
    cy.url().should('eq', Cypress.env('GHOST_DASHBOARD_URL'))

    // And I go to the Tags page.
    cy.visit(Cypress.env('GHOST_TAG_URL'))
    cy.wait(3000)
  })
  it('Crear tag con nombre y color válidos.', () => {

    //When I create a new tag with a valid name and valid color.
    cy.get('a[href="#/tags/new/"]').eq(0).click()
    cy.wait(5000)
    cy.get('#tag-name').type(dataPool.name)
    cy.wait(2000)
    cy.get('[placeholder="15171A"]').type(dataPool.color_valid)
    cy.wait(2000)

    //And I create it 
    cy.get('button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click()
    cy.wait(3000)

    //Then I expect that the tag is created.
    cy.get('.gh-canvas-breadcrumb').then(($elem) => {
      expect($elem.text()).contains(Cypress.env('EDIT_TAG_LABEL'))
    })
  })
})