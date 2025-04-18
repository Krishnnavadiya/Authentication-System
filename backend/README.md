# Backend API

## Overview

This is a Node.js backend API that provides authentication and data services for the frontend application. It uses Express for the web server and Prisma as an ORM for database operations.

## Tech Stack

- **Node.js**: JavaScript runtime
- **TypeScript**: For type-safe JavaScript code
- **Express**: Web framework
- **Prisma**: ORM for database operations
- **JWT**: For authentication
- **bcrypt**: For password hashing
- **Zod**: For schema validation and data validation

## Project Structure

- `prisma/`: Contains Prisma schema and migrations
- `src/controllers/`: Contains route controllers
- `src/middleware/`: Contains Express middleware
- `src/routes/`: Contains API route definitions
- `src/services/`: Contains business logic
- `src/utils/`: Contains utility functions
- `src/index.ts`: Entry point of the application
- `src/controllers/`: Contains the business logic for each endpoint
- `src/routes/`: Defines API endpoints
- `src/middleware/`: Contains middleware functions
- `prisma/`: Contains Prisma schema and migrations

## Setup Instructions

### 1. Environment Setup

 - Create a `.env` file in the backend root directory with the following configuration:

    ```env
    DATABASE_URL="file:./dev.db"
    JWT_SECRET="your-secret-key"
    PORT=5000

### 2. Installation Steps
    1. Install project dependencies
    2. Set up the database
    3. Run database migrations
    4. Start the development server

### 3. Detailed Commands 
 - Install Dependencies
    Run this command in the backend directory:
        npm install

 - Database Setup
    1. Ensure Prisma CLI is installed (included in dependencies)
    2. Generate Prisma client:
        npx prisma generate

    3. Run database migrations:
        npx prisma migrate dev

 - Starting the Server
    For development:
        npm run dev

    For production:
        npm run build
        npm start

## API Testing
The API will be available at: http://localhost:5000/api

Test the server is running by accessing:
- http://localhost:5000/api/health - Should return server status

## Available Scripts
- npm run dev - Starts development server with hot reload
- npm run build - Builds the project for production
- npm start - Runs the built project
- npm test - Runs the test suite
- npm run lint - Runs the linter
- npm run format - Formats the code using Prettier

## Troubleshooting
### Common Issues
1. Port Already in Use
   - Check if another process is using port 5000
   - Change PORT in .env file

2. Database Connection Issues
   - Verify DATABASE_URL in .env
   - Ensure SQLite file has proper permissions
   - Run npx prisma migrate reset to reset database

3. Dependencies Issues
   - Delete node_modules folder and package-lock.json
   - Run npm install again

## Development Guidelines
1. Always create new branches for features
2. Run tests before committing
3. Follow the existing code style
4. Update API documentation when adding endpoints

## API Documentation
### Authentication Endpoints
- POST /api/auth/register
  - Register new user
  - Required fields: email, password

- POST /api/auth/login
  - Login user
  - Required fields: email, password