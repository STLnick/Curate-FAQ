# Curate-FAQ

## The User Story

As an Administrator User I’d like the ability to manage questions
and answers and have them displayed to end users on a FAQ
page so that I can answer commonly asked questions.

Acceptance Criteria

1. Admins should be able to create, update and delete questions and answers.
2. End Users should be able to view these questions and answers.

### Tech Stack

MongoDB, Express, React, Node

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