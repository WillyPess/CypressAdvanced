import { faker } from '@faker-js/faker'

describe('Create Projects', () => {
    beforeEach(() => {
      cy.login()
    })
  
    it('Project Created Sucessfully', () => {
        
      const projectData = {
        name: `project-${faker.datatype.uuid()}`,
        description: faker.random.words(5),
      }

      cy.gui_newProject(projectData);

      cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${projectData.name}`)
      cy.contains(projectData.name).should('be.visible');
      cy.contains(projectData.description).should('be.visible');
    })
  })