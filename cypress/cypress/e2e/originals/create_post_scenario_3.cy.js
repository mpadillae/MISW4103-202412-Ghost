describe('Funcionalidad: Crear post', () => {
    //Login 
    beforeEach(() => {
      //Given I go to Login page
      cy.visit(Cypress.env('GHOST_LOGIN_URL'))
      cy.wait(7000)
      cy.screenshot('create_post_scenario_3/1', {overwrite: true})
      // And I Fill input form with GHOST_USERNAME and GHOST_PASSWORD
      cy.get('input.gh-input.email').type(Cypress.env('GHOST_USERNAME'))
      cy.screenshot('create_post_scenario_3/2', {overwrite: true})
      cy.get('input.gh-input.password').type(Cypress.env('GHOST_PASSWORD'))
      cy.screenshot('create_post_scenario_3/3', {overwrite: true})
      cy.get('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view').click()
      cy.wait(2000)
      cy.screenshot('create_post_scenario_3/4', {overwrite: true})
      // And I wait for the dashboard to be visible
      cy.url().should('eq', Cypress.env('GHOST_DASHBOARD_URL'))
      cy.screenshot('create_post_scenario_3/5', {overwrite: true})
      // And I go to the Posts page
      cy.visit(Cypress.env('GHOST_POSTS_URL'))
      cy.screenshot('create_post_scenario_3/6', {overwrite: true})

    })
    it('Crear post con titulo, descripcion y divider', ()=>{
        // When I create a new post with a title, description and divider between title and description
        cy.get('a[href="#/editor/post/"]').eq(0).click()
        cy.wait(5000)
        cy.screenshot('create_post_scenario_3/7', {overwrite: true})
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type('Tercera Prueba Automatizada')
        cy.wait(3000)
        cy.screenshot('create_post_scenario_3/8', {overwrite: true})
        cy.get('.kg-prose').click()
        cy.wait(3000)
        cy.screenshot('create_post_scenario_3/9', {overwrite: true})
        cy.get('.kg-prose').type('/hr{enter}')
        cy.wait(3000)
        cy.screenshot('create_post_scenario_3/10', {overwrite: true})
        cy.get('.kg-prose').type('Esta es una breve descripcion de prueba')
        cy.screenshot('create_post_scenario_3/11', {overwrite: true})

        // And I publish it 
        cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').eq(0).click()
        cy.wait(3000)
        cy.screenshot('create_post_scenario_3/12', {overwrite: true, disableTimersAndAnimations: false})
        cy.get('button.gh-btn.gh-btn-black.gh-btn-large').click()
        cy.wait(3000)
        cy.screenshot('create_post_scenario_3/13', {overwrite: true, disableTimersAndAnimations: false})
        cy.get('button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view').click()
        cy.wait(5000)
        cy.screenshot('create_post_scenario_3/14', {overwrite: true, disableTimersAndAnimations: false})

        // Then I expect that the post is created.
        cy.get('a[href="#/dashboard/"]').eq(0).click({ force: true })
        cy.wait(2000)
        cy.screenshot('create_post_scenario_3/15', {overwrite: true})
        cy.url().should('eq', Cypress.env('GHOST_DASHBOARD_URL'))
        cy.visit(Cypress.env('GHOST_POSTS_URL'))
        cy.wait(2000)
        cy.screenshot('create_post_scenario_3/16', {overwrite: true})
        cy.url().should('eq', Cypress.env('GHOST_POSTS_URL'))
    })
})