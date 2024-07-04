<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
</head>
<body>
  <h1>Authentication  </h1>

  <p>This repository contains a full-stack web application built with ReactJS for the frontend and Node.js, Express, and MongoDB for the backend. The project focuses on implementing authentication features.</p>

  <h2>Technologies Used</h2>
  <ul>
    <li><strong>Frontend</strong>: ReactJS</li>
    <li><strong>Backend</strong>: Node.js, Express</li>
    <li><strong>Database</strong>: MongoDB</li>
    <li><strong>Libraries</strong>: bcryptjs, jsonwebtoken (JWT), cookies</li>
    <li><strong>React Hooks</strong>: useState,useHistory, useNavigate</li>
  </ul>

  <h2>Overview</h2>
  <p>This project demonstrates the integration of frontend and backend technologies to create a secure authentication system using JSON Web Tokens (JWT) and secure cookie storage. The backend handles user registration, login, and authentication, while the frontend provides a user-friendly interface for these functionalities.</p>

  <h3>Key Features</h3>
  <ul>
    <li><strong>Authentication</strong>: User registration and login using encrypted passwords stored in MongoDB.</li>
    <li><strong>Secure Cookies</strong>: Storing JWT tokens securely in HTTP-only cookies to prevent client-side access.</li>
    <li><strong>React Integration</strong>: Frontend communicates with the backend API using axios for HTTP requests.</li>
  </ul>

  <h2>Learning Outcomes</h2>
  <p>Throughout this project, we gained insights into various aspects of backend development:</p>
  <ul>
    <li><strong>Security</strong>: Implementing password hashing with bcryptjs for secure storage.</li>
    <li><strong>Authentication</strong>: Using JWT to manage user sessions and ensure secure communication between frontend and backend.</li>
    <li><strong>Frontend-Backend Integration</strong>: Integrating ReactJS with Node.js and Express to create a seamless user experience.</li>
    <li><strong>React Hooks</strong>: Utilizing useHistory and useNavigate (for react-router-dom v6>) hooks for client-side navigation after authentication.</li>
  </ul>

  <h2>Getting Started</h2>
  <ol>
    <li>Clone the repository: <code>git clone https://github.com/adarshsingh1706/Auth</code></li>
    <li>Navigate to the project directory: <code>cd project-directory</code></li>
    <li>Install dependencies:</li>
    <ul>
      <li>Backend: <code>cd backend &amp;&amp; npm install</code></li>
      <li>Frontend: <code>cd frontend &amp;&amp; npm install</code></li>
    </ul>
    <li>Set up environment variables:</li>
    <ul>
      <li>Create a <code>.env</code> file in the backend directory and define necessary variables (e.g., PORT, MONGO_DB_URL, SECRET_KEY).</li>
    </ul>
    <li>Start the backend server: <code>cd backend &amp;&amp; npm start</code></li>
    <li>Start the frontend development server: <code>cd frontend &amp;&amp; npm start</code></li>
    <li>Open your browser and go to <code>http://localhost:4000</code> to view the application.</li>
  </ol>

  <h2>Contributing</h2>
  <p>Contributions are welcome! Please fork the repository and create a pull request with your improvements.</p>

  <h2>License</h2>
  <p>This project is licensed under the <a href="link-to-license">MIT License</a>.</p>
</body>
</html>
