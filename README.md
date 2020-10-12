# Curate-FAQ

### Tech Stack (for this branch!)

React, XAMPP, SQL, PHP

## How To Run Project

1. Clone project onto your machine (specifically this **php** branch)

2. Move (or clone directly in step 1) into your local `XAMPP/htdocs` directory

3. Run `yarn` or `npm i` to install dependencies

3. Start XAMPP
  - **NOTE**: The project is setup to interact with XAMPP on _port 80_ by default. If you've set it up to run on a different port then you will need to change the `baseUrl` variable inside of `/src/api/index.js` from `http://localhost:80/faq-php/faq-backend` to `http://localhost:<YOUR_PORT>/faq-php/faq-backend` replacing '<YOUR_PORT>' with the actual port you have configured.

4. Run `yarn start` or `npm start` depending on how you installed dependencies

5. Play around!

## The User Story

As an Administrator User I’d like the ability to manage questions
and answers and have them displayed to end users on a FAQ
page so that I can answer commonly asked questions.

Acceptance Criteria

1. Admins should be able to create, update and delete questions and answers.
2. End Users should be able to view these questions and answers.

**Story Points for this Story**

- Time: **2pts** Estimate 5hrs
- Effort: **2pts** Minimal - moderate
- Risk: **1pt** Little to none - this is the whole app. We can't break nothing! 
In a production environment it would still be relatively low risk. Biggest risk factor would be ensure we create, update and delete info from the database properly.

Points: 5

**Tasks**

*Required for Minimum Viable Product*

1. Create Database
    - In MongoDB Atlas create a new database for FAQs and Users (Admins)
    - Connect to Compass for easy access on machine
2. Create backend routes
    - `/users`
    - `/faqs`
3. Create database interaction functions for backend
    - create, read, update, delete for `users` and `faqs`
4. Create display for Question & Answers
    - A simple list will do to start
5. Create a Login for an Admin to use
    - Simple user/pass form checked against database for authentication
        - NOTE: Not implementing full security checks here for simple app
6. ADD, EDIT, and DELETE buttons/icons for Admins to use
    - If Admin logged in, display these items
    - Implement functionality of interaction with database

*Additional Tasks*

1. Improve Styling
2. Animations

**What I'd Like To Improve**

User Authentication 
- AuthorizationCould use Firebase to not store email/pass in my database
- Encrypt passwords if keeping in database
- Create an Admin status so both Admins and End Users could login but only Admins see the Add, Edit, Delete buttons

Backend Interfacing
- Use GraphQL - I've been wanting to try this. Might be too simple an app to truly see the benefit of GraphQL but would like the experience of setting it up with Apollo in a React App.

Animations
- Use Framer-Motion for some basic animations
