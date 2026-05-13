# Spotify Backend Project

A backend music streaming platform built using Node.js, Express.js, and MongoDB. The project implements authentication, role-based authorization, music uploads, album management, and cloud media storage using a modular MVC architecture.

## Features

* JWT-based Authentication & Authorization
* User and Artist Role Management
* Secure Password Hashing using bcrypt
* Music Upload APIs
* Album Creation and Retrieval APIs
* Cloud Media Storage using ImageKit
* Protected Routes using Middleware
* RESTful API Architecture
* MongoDB Document Relationships using Mongoose
* Modular MVC Backend Structure

---

# Tech Stack

## Backend

* Node.js
* Express.js

## Database

* MongoDB
* Mongoose

## Authentication & Security

* JWT (JSON Web Tokens)
* bcryptjs
* Cookie-based Authentication

## File Upload & Cloud Storage

* Multer
* ImageKit

---

# Project Architecture

The project follows a modular MVC architecture:

```bash
src/
│
├── controllers/
├── models/
├── routes/
├── middlewares/
├── services/
└── app.js
```

---

# Core Backend Concepts Implemented

## 1. Authentication & Authorization

The application supports secure authentication using JWT tokens.

Implemented Features:

* User Registration
* User Login
* Logout Handling
* Password Hashing using bcrypt
* Cookie-based JWT Storage

Role-based authorization is implemented for:

* Users
* Artists

Artists are allowed to:

* Upload music
* Create albums

Regular users can:

* Browse music
* View albums

---

## 2. Music Upload System

Artists can upload music files using Multer middleware.

Workflow:

1. Receive file using Multer memory storage
2. Convert file buffer to Base64
3. Upload media to ImageKit cloud storage
4. Store uploaded file URL in MongoDB

---

## 3. Album Management

The backend supports:

* Album creation
* Associating multiple music tracks with albums
* Fetching album details
* Populating artist and music metadata

Mongoose population is used to establish document relationships between:

* Users
* Albums
* Music Tracks

---

## 4. Middleware-Based Route Protection

Custom middleware is used to protect APIs.

Implemented middleware:

* `authUser`
* `authArtist`

The middleware verifies:

* JWT validity
* User roles
* Access permissions

---

# API Endpoints

## Authentication Routes

| Method | Endpoint             | Description   |
| ------ | -------------------- | ------------- |
| POST   | `/api/auth/register` | Register user |
| POST   | `/api/auth/login`    | Login user    |
| POST   | `/api/auth/logout`   | Logout user   |

---

## Music Routes

| Method | Endpoint                     | Description     |
| ------ | ---------------------------- | --------------- |
| POST   | `/api/music/uploads`         | Upload music    |
| POST   | `/api/music/album`           | Create album    |
| GET    | `/api/music/`                | Get all music   |
| GET    | `/api/music/albums`          | Get all albums  |
| GET    | `/api/music/albums/:albumId` | Get album by ID |

---

# Database Models

## User Model

* Username
* Email
* Password
* Role

## Music Model

* URI
* Title
* Artist Reference

## Album Model

* Title
* Music References
* Artist Reference

---

# Security Features

* JWT Authentication
* bcrypt Password Hashing
* Middleware Route Protection
* Role-Based Authorization
* Cookie-Based Session Handling

---

# Installation & Setup

## Clone Repository

```bash
git clone https://github.com/nishant-kumar-5173/Spotify_Project-main.git
cd Spotify_Project-main
```

## Install Dependencies

```bash
npm install
```

## Environment Variables

Create a `.env` file:

```env
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

## Run Server

```bash
npm start
```

---

# Learning Outcomes

Through this project, I learned:

* Backend API development
* JWT Authentication
* Role-based access control
* File upload handling
* Cloud media storage integration
* MongoDB schema relationships
* Middleware architecture
* REST API design
* MVC backend structure
* Secure backend development

---

# Future Improvements

* Audio Streaming Support
* Playlist Management
* Search & Filtering APIs
* Pagination
* Like/Favorite System
* Redis Caching
* Docker Deployment
* Unit & Integration Testing
* API Documentation using Swagger

---

# Author

Nishant Kumar

GitHub: ht
