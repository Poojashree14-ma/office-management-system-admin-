# Office Management System – Admin Dashboard

## 📌 Project Overview

The **Office Management System (OMS)** is a web-based application designed to simplify and manage daily office activities through a centralized admin dashboard.

The system provides an organized interface for managing employees, monitoring attendance, handling leave requests, assigning tasks, and viewing reports. It also includes an authentication system to provide controlled access to the application.

## 🚀 Features

### 1. Admin Login & Authentication
- Secure admin login interface.
- Authentication using JWT.
- Protected routes to restrict unauthorized access.

### 2. Admin Dashboard
- Centralized dashboard for office management.
- Overview of office activities.
- Easy navigation between different management sections.

### 3. Employee Management
- View employee information.
- Manage employee records.
- Organize employee-related information.

### 4. Attendance Management
- Attendance management interface.
- View and monitor attendance records.

### 5. Leave Management
- Manage employee leave information.
- View leave-related records.

### 6. Task Management
- Organize and manage office tasks.
- Track assigned work.

### 7. Reports & Notifications
- Access office-related reports.
- View notifications and important updates.

### 8. Employee Profile
- View employee profile information.

## 🛠️ Technologies Used

**Frontend**
- React.js
- JavaScript
- CSS
- React Router DOM

**Backend**
- Python
- FastAPI
- SQLAlchemy
- JWT Authentication

**Database**
- SQLite

## 📂 Project Structure

```text
office-management-system-admin/
│
├── App.jsx
├── App.css
├── main.jsx
│
├── pages/
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── Employees.jsx
│   ├── Attendance.jsx
│   ├── Leave.jsx
│   ├── Tasks.jsx
│   ├── Reports.jsx
│   ├── Notifications.jsx
│   └── Profile.jsx
│
├── components/
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   └── ProtectedRoute.jsx
│
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── auth.py
│   ├── employee.py
│   ├── attendance.py
│   ├── leave.py
│   ├── dashboard.py
│   ├── hashing.py
│   └── jwt_handler.py
│
├── requirements.txt
├── .env
└── README.md
```

*Note: This is a logical overview of the project files. Keep the actual directory structure of your repository when adding or updating files.*

## ⚙️ Installation and Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/Poojashree14-ma/office-management-system-admin-.git
```

### Step 2: Navigate to the Project

```bash
cd office-management-system-admin-
```

### Step 3: Set Up the Backend

Create and activate a Python virtual environment:

```bash
python -m venv venv
```

Activate it on Windows:

```bash
venv\Scripts\activate
```

Install the required dependencies:

```bash
pip install -r requirements.txt
```

Start the FastAPI server:

```bash
uvicorn main:app --reload
```

Backend API:

```text
http://127.0.0.1:8000
```

API documentation:

```text
http://127.0.0.1:8000/docs
```

### Step 4: Set Up the Frontend

Navigate to the directory containing the frontend `package.json` file.

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

*Note: The repository's visible root listing does not currently show a package.json. Ensure the frontend package configuration is present before running these commands.*

## 🔐 Security

- Authentication is used to control access.
- JWT is used for token-based authentication.
- Password hashing is handled on the backend.
- Protected routes help prevent unauthorized access.

Never upload actual passwords, secret keys, or private credentials to GitHub.

## 🎯 Project Objective

The main objective of this project is to develop a centralized office management platform that reduces manual administrative work, improves employee management, and makes everyday office operations easier to monitor.

## 👩‍💻 Developer

**Poojashree14-ma**

GitHub Repository:  
https://github.com/Poojashree14-ma/office-management-system-admin-

## 📄 License

This project is available for educational and development purposes. Add a formal license if you intend to distribute it under specific terms.
