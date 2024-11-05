# Cypress Project

This is a automation project covers GUI and API tests.
This project is a showcase of my techniques and knowledge

## The project

This project uses a free web system developed by GitLab to run the tests

- Uses Docker for local environment 
- Tests using GUI and API
- Using and restoring session from last logins
- Using experimental funcionalities from cypress
- Reading files 
- Using commands in OS level

## Pre requisites

1 - GitBash
2 - Docker
3 - NodeJS

## How to install

1. Clone the repository.
2. Access the folder 'CypressAdvanced' 
3. Download the GitLab docker image with the comand `docker run --publish 80:80 --publish 22:22 --hostname localhost wlsf82/gitlab-ce`
4. Install cypress by running `npm install --save-dev cypress` in your terminal.


## Set up Docker Environment
1. Access 'localhost' and set new password to 'root1234'
2. Access User Settings -> Access Tokens
3. Inform 'WillyShowcase' on Name and click on Create
![alt text](image.png)
3. Inform your token on `cypress.env.json` file
4. Run the cypress app `npx cypress open`