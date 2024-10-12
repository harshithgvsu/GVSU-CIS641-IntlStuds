# Job Board Web Application

The goal of this project is to create an interactive job board web application that offers users a smooth and engaging experience. The platform will allow users to swipe through job postings, generate custom resumes using GPT, and easily apply for jobs. It will include modern UI/UX components and secure user authentication using JWT.

## Team Member

- **Harshith Salunkay Pradeepkumar**

## Prerequisites

To set up and run the project locally, ensure you have the following software installed:

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
   git clone https://github.com/your-username/job-board-app.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd job-board-app
   ```

3. **Install all dependencies:**

   ```bash
   npm install
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
   GPT_API_KEY=your-gpt-api-key
   ```

6. **Run the development server:**

   ```bash
   npm start
   ```

   The app will run locally at `http://localhost:3000`.

## Technologies Used

- **Frontend**: React.js, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Resume Generation**: GPT (OpenAI's API)
- **Animations**: React-Spring
  
