# Job Board Application

The **Job Board Application** is an interactive platform designed to streamline the job search and application process for users. It offers a modern, engaging experience by allowing users to swipe through job postings, generate customized resumes using GPT, and apply for jobs seamlessly. The project incorporates advanced features and ensures secure user authentication with JWT, providing users with both functionality and ease of use.

## Purpose and Overview

The purpose of this project is to create a dynamic, user-friendly job board that simplifies the job application process. Users can browse through job postings using an intuitive swipe interface, generate AI-powered resumes tailored to each position, and submit their applications—all within the platform. With the integration of cutting-edge technologies and secure authentication, this job board aims to provide a comprehensive job-hunting tool for users.

## Key Features

- **Swipeable Job Postings**: Users can swipe through job listings to find relevant opportunities quickly and efficiently, similar to popular swiping apps.
- **Custom Resume Generation**: Powered by GPT, the platform generates personalized resumes based on the job description, giving users a competitive edge.
- **Secure User Authentication**: JWT-based authentication ensures that users' accounts and personal information are protected.
- **Smooth Animations**: Animations using React-Spring or Framer Motion create a fluid user experience when interacting with job postings.
- **Job Application**: Users can directly apply to jobs from within the app, streamlining the process.

## Technologies Used

- **Frontend**: React.js, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB for storing user data and job postings
- **Authentication**: JSON Web Tokens (JWT) for secure login and session management
- **AI Integration**: OpenAI's GPT for resume generation
- **Animations**: React-Spring for smooth swipe transitions in the job listing interface

## Why This Project Matters

This project demonstrates a strong understanding of full-stack development, covering both frontend and backend technologies. It showcases proficiency in secure user authentication, AI integration for customized services, and the creation of modern user experiences through interactive UI components. 

The application solves a real-world problem by offering a one-stop solution for job seekers, combining job searching, resume generation, and application submission in one place. It reflects skills in building scalable, user-centered web applications, and it stands as a valuable tool for users while illustrating a mastery of the latest web development practices.

## Prerequisites

To run the project locally, ensure you have the following software installed:

- **Node.js and npm**:  
  Download and install from [Node.js official website](https://nodejs.org/en/download/package-manager/current).
  
- **MongoDB**:  
  Install MongoDB locally or use MongoDB Atlas for cloud storage:  
  - [MongoDB Installation Guide](https://www.mongodb.com/docs/manual/administration/install-community/)
  - [MongoDB Atlas CLI](https://www.mongodb.com/try/download/atlascli)

- **Git**:  
  Install Git from [Git Official Documentation](https://www.atlassian.com/git/tutorials/install-git).

- **Postman** (for testing API routes):  
  Download from [Postman Official Site](https://www.postman.com/downloads/).

- **React-Spring or Framer Motion**:  
  Install using npm for swipeable animations in job listings.

## Run Instructions

Follow these steps to set up the project locally:

1. **Clone the repository:**

  ```bash
   git clone https://github.com/harshithgvsu/CIS641-HW2-Salunkay_Pradeepkumar.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd CIS641-HW2-SalunkayPradeepkumar
   ```

3. **Install all dependencies:**

   ```bash
   rm-rf package-lock.json; npm i
   ```

4. **Set up MongoDB connection:**

   - Install MongoDB locally or configure MongoDB Atlas.
   - Set up a MongoDB URI and add it to your environment variables.

5. **Set up environment variables:**

   Create a `.env` file in the root of your project with the following details:

   ```   
   PORT=5000
   MONGO_URI=your-mongodb-uri
   JWT_SECRET=your-jwt-secret
   API_URL='https://jooble.org/api/'
   API_KEY=your-jooble-api-key
   OPEN_API_KEY=your-gpt-api-key
   LOCAL_URL='http://localhost:5002'
   ```

6. **Run the development server:**

   ```bash
   - npm run start
   - node server.js
   ```
