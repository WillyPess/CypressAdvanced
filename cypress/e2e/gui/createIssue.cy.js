import { faker } from '@faker-js/faker'

describe('Create Issue', () => {
    const issue = {
      name: `issue-${faker.datatype.uuid()}`,
      description: faker.random.words(3),
      project: {
        name: `project-${faker.datatype.uuid()}`,
        description: faker.random.words(5),
      }
    }

    beforeEach(() => {
      cy.api_deleteProjects  ()
      cy.login()
      cy.gui_newProject(issue.project)
    })

    it('Issue Created Sucessfully', () => {
      cy.gui_newIssue(issue)

      cy.get('.content-wrapper > div.container-fluid')
        .should('contain', issue.name)
        .and('contain', issue.description)
    })
  })