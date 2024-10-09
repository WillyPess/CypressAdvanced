Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
    { cacheSession = true } = {},
  ) => {
    const login = () => {
      cy.visit('/users/sign_in')
  
      cy.get("[data-qa-selector='login_field']").type(user),
      cy.get("[data-qa-selector='password_field']").type(password, { log: false }),
      cy.get("[data-qa-selector='sign_in_button']").click()
    }

    const validate = () => {
      cy.visit('/'),
      cy.location('pathname', {timeout: 1000})
      .should('not.eq', '/users/sign_in')
    }

    const options = {
      cacheAcrossSpecs: true,
      validate
    }

    if (cacheSession) {
      cy.session(user, login, options)
    } else {
      login()
    }
  })

  Cypress.Commands.add('logout', () => {
      cy.get(".header-user-dropdown-toggle").click();
      cy.get(".sign-out-link").click();
  })
  
  Cypress.Commands.add('gui_newProject', projectData => {
    cy.visit("http://localhost/projects/new"),
    cy.get("#blank-project-name > .project-name > #project_name").type(projectData.name);
    cy.get(":nth-child(5) > #project_description").type(projectData.description);
    cy.get('#project_initialize_with_readme').check();
    cy.get('#blank-project-pane > #new_project > .btn-success').click();
})

Cypress.Commands.add('gui_newIssue', issue => {
  cy.visit(`/${Cypress.env('user_name')}/${issue.project.name}/issues/new`),

  cy.get("#issue_title").type(issue.name);
  cy.get("#issue_description").type(issue.description);
  cy.get('.assign-to-me-link').click();
  cy.contains('Submit issue').click();
})

Cypress.Commands.add('gui_staringProject', () => {
  cy.get(":nth-child(1) > .count-badge-button").click();
})