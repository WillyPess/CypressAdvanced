# 🧪 Cypress Automation Project — GUI + API Testing

This project demonstrates my skills in test automation using **Cypress with TypeScript**, covering both **GUI** and **API** scenarios. It's designed as a real-world showcase of advanced Cypress features and my ability to create structured, maintainable test suites.

---

## 📌 About the Project

This automation suite tests a free self-hosted version of **GitLab CE**, running locally via Docker.

Key features:

- ✅ Uses **Docker** to run GitLab CE locally
- ✅ Covers **GUI and API** testing
- ✅ Restores and reuses login sessions
- ✅ Leverages **Cypress experimental features**
- ✅ Reads and verifies content from local files
- ✅ Executes custom OS-level commands via Node

---

## ⚙️ Prerequisites

Make sure the following tools are installed on your system:

1. [Git Bash](https://git-scm.com/)
2. [Docker](https://www.docker.com/)
3. [Node.js (LTS)](https://nodejs.org/)

---

## 🚀 How to Set Up & Run

### 1. Clone the Repository

```bash
git clone https://github.com/willypess/cypress-gitlab-tests.git
cd cypress-gitlab-tests/CypressAdvanced
````

### 2. Run GitLab CE via Docker

```bash
docker run --detach \
  --publish 80:80 \
  --publish 22:22 \
  --hostname localhost \
  wlsf82/gitlab-ce
```

### 3. Install Cypress and Dependencies

```bash
npm install --save-dev cypress
```

---

## 🐳 Docker GitLab Setup

1. Open your browser and go to: [http://localhost](http://localhost)
2. Set the root password to: `root1234`
3. Go to **User Settings → Access Tokens**
4. In the “Name” field, type `WillyShowcase`, then click **Create**
5. Save the generated **Personal Access Token**

![GitLab Token Setup](image.png)

6. Add the token to your `cypress.env.json` file in this format:

```json
{
  "gitlab_token": "your_token_here"
}
```

7. Run Cypress:

```bash
npx cypress open
```

---

## ✅ What This Project Demonstrates

* Cypress advanced test organization and command chaining
* Reuse of login sessions for performance
* API token authentication and assertion
* Real-time interaction with Dockerized environments
* Working with Cypress environment variables and file reads
