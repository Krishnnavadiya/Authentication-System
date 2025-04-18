
# 🌐 **MERN Stack Project**

This is a full-stack web application built using the **MERN** (MongoDB, Express, React, Node.js) stack. It includes user authentication and core functionalities connected to a backend API.

---

## 📁 **Project Structure**

```
Intern/
├── frontend/                      # 🧩 Frontend React App
│   ├── public/                    # Static files (HTML, favicon, etc.)
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/                       # Source code
│   │   ├── api/                   # API client setup (e.g., Axios)
│   │   ├── components/            # Reusable UI components
│   │   ├── context/               # React context providers
│   │   ├── pages/                 # Route-level components
│   │   ├── styles/                # Tailwind or CSS files
│   │   ├── types/                 # TypeScript interfaces/types
│   │   └── App.tsx                # Root component
│   ├── .env                       # Environment variables
│   └── package.json               # Project metadata & dependencies
│
├── backend/                       # 🚀 Backend Node.js Server
│   ├── prisma/                    # Prisma ORM schema and migrations
│   │   ├── schema.prisma          # Database schema definition
│   │   └── migrations/            # Auto-generated DB migrations
│   ├── src/                       # Application source code
│   │   ├── controllers/           # Request handlers
│   │   ├── middleware/            # Custom Express middlewares
│   │   ├── routes/                # API route definitions
│   │   ├── services/              # Business logic
│   │   ├── utils/                 # Utility/helper functions
│   │   └── index.ts               # App entry point
│   ├── .env                       # Backend environment variables
│   └── package.json               # Backend dependencies
│
└── README.md                      # 📘 Project documentation
```

---

## 🚀 **Tech Stack**

### 🔹 **Backend**
- **Node.js**
- **TypeScript**
- **Express**
- **Prisma (ORM)**
- **SQLite (Dev DB)** or other DB via `DATABASE_URL`
- **JWT** (Authentication)
- **bcrypt** (Password Hashing)
- **Zod** (Validation)

### 🔹 **Frontend**
- **React.js**
- **TypeScript**
- **Axios**
- **React Router**
- **TailwindCSS** *(if used)*

---

## ⚙️ **Setup Instructions**

### 🔧 **Prerequisites**
- Node.js & npm
- Git
- SQLite *(or your preferred DB setup)*
- VS Code *(Recommended)*

---

### 📦 **Clone the Project**

```bash
git clone https://github.com/Krishnnavadiya/mern-project.git
cd mern-project
```

---

### 🛠 **Backend Setup**

```bash
cd backend
npm install
```

#### 🧪 **Configure Environment**

Create a `.env` file in the `backend` folder:

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-secret-key"
PORT=5000
```

#### 🔁 **Prisma Setup**

```bash
npx prisma generate
npx prisma migrate dev
```

#### ▶️ **Start Backend Server**

```bash
# Development
npm run dev

# Production
npm run build
npm start
```

- **Backend API:** `http://localhost:5000/api`
- **Health check:** `http://localhost:5000/api/health`

---

### 💻 **Frontend Setup**

```bash
cd ../frontend
npm install
```

#### ▶️ **Start Frontend App**

```bash
npm run dev
```

- **Frontend App:** `http://localhost:5173` *(or your Vite port)*

---

## 🧪 **Testing API**

Use Postman or browser to test the following endpoints:

- `POST /api/auth/register` → Register new user
- `POST /api/auth/login` → Login
- `GET /api/health` → Health check

---

## 🧩 **Common Scripts**

### 🔧 **Backend**

| Script           | Description                |
|------------------|----------------------------|
| `npm run dev`    | Run server in dev mode     |
| `npm run build`  | Build for production       |
| `npm start`      | Start production build     |
| `npm test`       | Run tests                  |
| `npm run lint`   | Run ESLint                 |
| `npm run format` | Format code using Prettier |

### 🎨 **Frontend**

| Script            | Description                     |
|-------------------|---------------------------------|
| `npm run dev`     | Start React dev server          |
| `npm run build`   | Build optimized production app  |
| `npm run preview` | Preview built app               |

---

## ⚠️ **Troubleshooting**

- **Port Already in Use:**  
  Change port in `.env` or kill the process using it.

- **Database Issues:**  
  Recheck `DATABASE_URL`  
  Use:  
  ```bash
  npx prisma migrate reset
  ```

- **Dependency Errors:**  
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

---

## 📚 **Development Guidelines**

- Create new branches for new features
- Commit frequently with meaningful messages
- Run `npm run lint` and `npm run format` before pushing
- Keep code modular and readable
- Update README/API docs as needed

---

## 📌 **API Overview**

### 🔐 **Auth Routes**
- `POST /api/auth/register` – Register
- `POST /api/auth/login` – Login

> *More routes available inside `backend/src/routes/`*

---

## ✅ **Deployment (Optional)**

- **Backend:** Host on Render, Railway, or Vercel (API)
- **Frontend:** Host on Netlify or Vercel

---

## 👨‍💻 **Author**

**Krishn Navadiya**  
GitHub: [@Krishnnavadiya](https://github.com/Krishnnavadiya)
