# 🌐 MERN Stack Project

This is a full-stack web application built using the **MERN** (MongoDB, Express, React, Node.js) stack. It includes user authentication and core functionalities connected to a backend API.

---

## 📁 Project Structure
Intern/
├── frontend/
│   ├── public/             # Static files
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── api/           # API client setup
│   │   ├── components/    # Reusable UI components
│   │   ├── context/       # React context providers
│   │   ├── pages/         # Page components
│   │   ├── styles/        # CSS files
│   │   ├── types/         # TypeScript types
│   │   └── App.tsx        # Root component
│   ├── .env              # Frontend environment variables
│   └── package.json      # Frontend dependencies
│
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma  # Database schema
│   │   └── migrations/    # Database migrations
│   ├── src/
│   │   ├── controllers/   # Request handlers
│   │   ├── middleware/    # Express middleware
│   │   ├── routes/       # API routes
│   │   ├── services/     # Business logic
│   │   ├── utils/        # Helper functions
│   │   └── index.ts      # Entry point
│   ├── .env              # Backend environment variables
│   └── package.json      # Backend dependencies
│
└── README.md             # Project documentation

---

## 🚀 Tech Stack

### 🔹 Backend
- **Node.js**
- **TypeScript**
- **Express**
- **Prisma (ORM)**
- **SQLite (Dev DB)** or other DB via `DATABASE_URL`
- **JWT** (Authentication)
- **bcrypt** (Password Hashing)
- **Zod** (Validation)

### 🔹 Frontend
- **React.js**
- **TypeScript**
- **Axios**
- **React Router**
- **TailwindCSS** (if used)

---

## ⚙️ Setup Instructions

### 🔧 Prerequisites
- Node.js & npm
- Git
- SQLite (or relevant DB setup)
- VS Code (Recommended)

---

### 📦 Clone the Project
    ```bash
    git clone https://github.com/Krishnnavadiya/mern-project.git
    cd mern-project

### 🛠 Backend Setup
    ```bash
    cd backend
    npm install

---
  
#### 🧪 Configure Environment
 - Create a .env file in the backend folder:
    DATABASE_URL="file:./dev.db"
    JWT_SECRET="your-secret-key"
    PORT=5000
#### 🔁 Prisma Setup
    npx prisma generate
    npx prisma migrate dev
#### ▶️ Start Backend Server  
 1. Development
    npm run dev

 2. Production
    ```bash
    npm run build
    npm start

---

- Backend API: http://localhost:5000/api
- Health check: http://localhost:5000/api/health

### 💻 Frontend Setup
    ```bash
    cd ../frontend
    npm install
    
#### ▶️ Start Frontend App
    ```bash
    npm run dev
  Frontend App: http://localhost:5173 (or your Vite port)

---

### 🧪 Testing API
 - Use Postman or browser to test:
    POST /api/auth/register → Register new user
    POST /api/auth/login → Login
    GET /api/health → Health check

---

### 🧩 Common Scripts
#### Backend
 - npm run dev	: Run server in dev mode
 - npm run build	: Build for production
 - npm start	: Start production build
 - npm test	: Run tests
 - npm run lint	: Run ESLint
 - npm run format	: Format code using Prettier

#### Frontend

 - npm run dev	: Start React dev server
 - npm run build	: Build optimized production build
 - npm run preview	: Preview built app

---

### ⚠️ Troubleshooting
 - Port Already in Use
    Change port in .env or kill the process using it.

 - Database Issues
    Recheck DATABASE_URL
    ```bash
    npx prisma migrate reset

    - Dependency Errors
      ```bash
      rm -rf node_modules package-lock.json
      npm install

---
   
### 📚 Development Guidelines
 - Create new branches for new features
 - Commit frequently with meaningful messages
 - Run npm run lint and npm run format before pushing
 - Keep code modular and readable
 - Update README/API docs as needed

---

### 📌 API Overview
#### 🔐 Auth Routes
 - POST /api/auth/register – Register
 - POST /api/auth/login – Login
More routes available inside backend/src/routes/

### ✅ Deployment (Optional)
 - Backend: Host on Render, Railway, or Vercel (API)3
 - Frontend: Host on Netlify, Vercel

### 👨‍💻 Author
**Krishn Navadiya**  
GitHub: @Krishnnavadiya
