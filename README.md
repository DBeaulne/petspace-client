# Petspace Client App

## Setup
1.  `$ git clone git@github.com:DBeaulne/petspace-client.git`
2.  `$ cd petspace-client`
3.  `$ npm install`
4.  Make a copy of the .env.sample file. Renane it to .env and add the variables required.
5.  `$ npm start`
6.  The app will load onto your default browser

## Branches
### Develop branch
- develop branch created
- changed App.js to .jsx for consistency
- create component folders and files
- create:
  - Header component
    - Header.jsx
    - Header.scss
  - Footer component
    - Footer.jsx
    - Footer.scss
  - Button component
    - Button.jsx
    - Button.scss
  - Card component
    - Card.jsx
    - Card.scss
  - Map component
    - Map.jsx
    - Map.scss

### Home Page branch
- code the homepage
- add necessary routes
- include all neccessary components
  - Header component complete
    - Logo styling
    - Hamburger menu
      - styling for hamburger functionality
  - Footer component complete
    - hard coded locales
    - styled to mockups

### feature/hero
- code and style hero section

### feature/card branch
- code and style the card component to display the services available
- final styling to be done with service section coding and styling

### feature/service-section
- code and style service section
- code map() to display all services and render the appropriate icons and card content
- final card component styling

### feature/button
- code and style button component

### feature/ai-assistant
- code and style ai assistant section
- revise button component props, logic, and styling

### AI Assistant Page
- code the Assistant page
- add necessary route

### feature/chat-bubble
- code a re-usable chat bubble component
- add code for differenciating between an input and response component

### page/log-in (renamed to page/login)
- create log-in page
- code route
- code and style rough draft of log-in page
- updated route to navigate to log-in page from homepage
- renamed branch to "page/login" - August 30, 2024
- final edits to login page to include Input component
- final styling of page
- edits to validateEmail() regex for emails was too complex to pass valid emails

### page/register
- create register page
- code route to page in App.js
- code and style rough draft of register page
- updated route to navigate to register page from assistant page
- updated route to navigate to login page after successful registration
- edits to validateEmail() regex for emails was too complex to pass valid emails
- add password and confirm password input field