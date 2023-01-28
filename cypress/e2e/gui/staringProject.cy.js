import { faker } from '@faker-js/faker'

describe('Staring Project', () => {
    const staring = {
      project: {
        name: `project-${faker.datatype.uuid()}`,
        description: faker.random.words(5),
      }
    }

    beforeEach(() => {
      cy.login()
      cy.gui_newProject(staring.project)
    })

    it('Project Starred Sucessfully', () => {
      cy.gui_staringProject(staring)

      cy.visit('http://localhost/dashboard/projects/starred')
      cy.reload;
      cy.contains(staring.project.name).should('be.visible');
      //   .and('contain', issue.description)
    })
  })