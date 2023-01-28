import { faker } from '@faker-js/faker'

describe('Create Projects API', () => {
  
    it('Project Created Sucessfully via API', () => {
      const projectAPI = {
        name: `project-${faker.datatype.uuid()}`,
        description: faker.random.words(5),
      }

      cy.api_newProject(projectAPI)
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.name).to.equal(projectAPI.name)
        expect(response.body.description).to.equal(projectAPI.description)
      }
      )

    })
  })