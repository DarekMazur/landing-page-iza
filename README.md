# Personal Landing Page

## Table of Contents

1. [Project Description](#1-project-description)
2. [System Requirements](#2-system-requirements)
3. [Installation](#3-installation)
4. [Project Structure](#4-project-structure)
5. [Configuration](#5-configuration)
6. [Running the Project](#6-running-the-project)
7. [Deployment](#7-deployment)

## 1. Project Description

The project is a landing page built using the React library. It's a simple page aimed at attracting users and encouraging them to take specific actions such as redirect to social media or website.

## 2. System Requirements

To work on the project, the following components are required:

- Node.js (including npm) version 18.17.1 or later
- Web browser (recommended: Chrome, Firefox, Opera, Safari)

## 3. Installation

1. Make sure you have the correct version of Node.js installed by typing the following command in the terminal:

   ```bash
   node -v
   npm -v
   ```

2. Clone the project repository to your local machine:
```bash
git clone https://github.com/DarekMazur/landing-page-iza.git
```

3. Navigate to the project folder:
```bash
cd project_name
```

4. Install all required dependencies using npm:
```bash
npm install
```

## 4. Project Structure
```markdown
- src/
  - components/        # React components
  - assets/            # Assets: images, CSS styles, etc.
  - App.js             # Main application component
  - index.js           # Entry file
- public/
  - index.html         # HTML file
- package.json         # Project information and dependencies
- README.md            # Project documentation
```
## 5. Configuration
In most cases, no configuration is required. However, if needed, you can adjust environment settings in configuration files.

## 6. Running the Project
To run the project locally, follow these steps:

In the console, navigate to the project directory.

Start the application using npm:

```bash
npm run dev
```
Open a web browser and go to:

```
http://localhost:5173
```
## 7. Deployment
To deploy the application on a production server, follow these steps:

Build the project:
```bash
npm run build
```

Install appropriate deployment tools (e.g., Apache, Nginx).

Transfer the contents of the "build" directory to the target directory on the server.

Start the HTTP server.

Alternatively, you can use deployment services such as <a href="https://www.netlify.com/" target="_blank">Netlify</a> for an easier deployment process.
Netlify allows you to deploy static sites directly from Git repositories with automatic builds and continuous deployment.