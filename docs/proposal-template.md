Team name: Intl Studs

Team members: Chandra Sekhar Singuru, Harshith Salunkay Pradeepkumar, Raghavendra Naidu Nayanuri

# Introduction

The goal of this project is to develop an interactive web application for a jewelry store, providing a seamless user experience for browsing and uploading images. The website will be used to showcase the store's collection through image galleries that allow users to view products in high quality. The project aims to focus on a smooth image slider for featured products.

Users will begin by either registering for a new account or logging into an existing one. Once logged in, users can view the upload images of jewelry pieces to the store's collection. These uploaded images will be retrieved from the database and displayed on the homepage in a slider format, providing an engaging and interactive way to explore products. This sliding feature will offer smooth transitions between images, ensuring an elegant user experience while browsing through various items.

The project will use modern web technologies like React for the frontend and Node.js for the backend. Security will also be a key focus, with user authentication managed through JSON Web Tokens (JWT), ensuring safe and secure user sessions. It will also consist a new feature that lets the user to chat with the owner of the jewel peices directly.

This project aims not only to provide a functional and secure platform for users to engage with the jewelry store’s offerings but also to deliver a modern user experience that enhances the store's brand online.

# Anticipated Technologies

To build this project, We will be using:

Frontend: React.js, HTML, CSS
Backend: Node.js with Express.js 
Database: MongoDB 
Authentication: JSON Web Tokens (JWT)
File Uploads: Multer
Version Control: Git

# Method/Approach

- Environment Set-up: Create a React project, making a basic webpage that allows to read and write data to the DB and make api calls.
- UI/UX: Gather information from the client, collect icons for each page of the website and implement in the frontend.
- User Authentication: Implementing JWT for login. Create login/register forms in React and secure backend routes in Express.
- Image Upload and Storage: Set up Multer in the backend to handle image uploads and store them in MongoDB. Create a form for image uploads.
- Image Display: Fetch the images from MongoDB and display them dynamically on the homepage. Implement a sliding gallery feature for an enhanced user experience.
- Testing and Deployment: Test the app for performance, security, and usability, and deploy.
- Certificate: Get an SSL certificate or add to a domain to get the application published.

# Estimated Timeline

Week 1-2: Gathering requirements, analyzing the feasibility, and building a test website by learning the technology. 
Week 3: Setting up the dev environment, and implement basic authentication (register and login) using React, Node.js, and MongoDB.
Week 4: Implement image upload functionality, store images in MongoDB, and ensure proper validation.
Week 5: Build the dynamic image carousal and integrate the uploaded images with the frontend.
Week 6: Perform testing, resolve bugs, and prepare for deployment.
Week 7: Final adjustments, deployment, and project documentation.
Week 8: Final week

# Anticipated Problems

User Management: Effeciently allowing owner access to admins and view access to the buyers. 
Image Handling: Might be tough to handle large image files which may cause performance issues. Requires, images to be compressed or use other storage techniques before storage.
Authentication & Security: Ensuring JWT tokens are securely handled and encrypting user data such as passwords.
Database Storage: Storing images in MongoDB to avoid storage and retrieval delays.
