# EducationPlatform Project

Welcome to the **EducationPlatform** project! This comprehensive platform aims to provide an enhanced learning experience by offering a range of educational resources and features. The project utilizes a variety of technologies to create a seamless and efficient user experience.

## Project Overview

The EducationPlatform project combines modern frontend and backend technologies to deliver an educational platform that is both user-friendly and robust.

### Frontend Technologies

The frontend of EducationPlatform is built using the following technologies:

- **React**: The project utilizes the React library for building dynamic and interactive user interfaces.

- **Material UI**: Material UI is employed to create a visually appealing and responsive design, ensuring a consistent and modern look for the platform.

- **react-router-dom**: React Router DOM is used for implementing efficient client-side routing, enabling smooth navigation between different sections of the platform.

### Backend Technologies

The backend of EducationPlatform is developed using the following technologies:

- **TypeScript**: TypeScript is chosen to enhance code maintainability and catch potential errors during development.

- **Express**: The Express framework is used to build the backend server, providing a robust foundation for handling API requests and business logic.

- **Nodemon**: Nodemon ensures automatic server restarts during development, enabling a streamlined development process.

- **CORS**: CORS middleware is employed to handle cross-origin resource sharing, allowing the frontend to make requests to the backend from different domains.

- **JWT (JSON Web Tokens)**: JWT is used for implementing secure authentication and authorization mechanisms, ensuring that users can access appropriate resources based on their roles.

- **bcrypt**: The bcrypt library is used for hashing user passwords, enhancing security by storing passwords securely in the database.

- **Jest**: Jest is utilized for writing and running unit tests, ensuring the reliability and correctness of the backend codebase.

- **pg**: The pg library provides a connection to a PostgreSQL database, allowing efficient storage and retrieval of data.

- **Supertest**: Supertest is used alongside Jest for writing API integration tests, ensuring the smooth functioning of API endpoints.

## Getting Started

To set up the EducationPlatform project on your local machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Wihctoh/EducationPlatform.git
   ```

2. Navigate to the project directory:

   ```bash
   cd education-platform
   ```

3. Install frontend dependencies:

   ```bash
   cd client
   npm install
   ```

4. Install backend dependencies:

   ```bash
   cd server
   npm install
   ```

5. Start the backend server (make sure you have PostgreSQL installed and running):

   ```bash
   nodemon index
   ```

6. Start the frontend development server:

   ```bash
   cd ../client
   npm start
   ```

Now you can access the EducationPlatform at http://localhost:3000 and explore its features.

