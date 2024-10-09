# Cypress Project

This is a automation project covers GUI and API tests.
This project is a showcase of my techniques and knowledge

## The project

This project uses a free web system developed by GitLab to run the tests

- Uses Docker for create the enviroment
- Tests using GUI and API
- APIs using access token
- Using and restoring session from last logins
- Protecting sensetive data
- Custom commands and "layers"
- Using experimental funcionalities from cypress
- Reading files 
- Using commands in OS level

### Pre requisites

1 - GitBash
2 - Docker
3 - Docker Image (GitLab Test)
3 - Node

#### How to install

1. Clone the repository.
2. Access the folder 'CypressAdvanced' 
3. Download the GitLab docker image with the comand `docker run --publish 80:80 --publish 22:22 --hostname localhost wlsf82/gitlab-ce`
2. Install cypress by running `npm install --save-dev cypress` in your terminal.
3. Install required dependencies by running `npm install` in your terminal.
5. Run `npx cypress open` to open the Cypress test runner.
6. Configure the cypress app

