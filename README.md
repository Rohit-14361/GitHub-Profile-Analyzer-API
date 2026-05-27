# 🚀 GitHub Profile Analyzer API

A backend REST API built with **Node.js, Express.js, Prisma ORM, and MySQL** that fetches GitHub user data using GitHub Public API, generates insights, and stores analyzed profiles in a database.

---

## 📌 Features

- Fetch GitHub user profile using username
- Generate insights (followers, following, public repositories, etc.)
- Store analyzed profiles in MySQL database
- Get all stored analyzed profiles
- Get single profile by username
- RESTful API structure

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- Prisma ORM
- MySQL
- Axios (GitHub API)
- dotenv

---

## 🚀 Additional Improvements / Features

- Used Prisma ORM with MySQL for type-safe database operations
- Implemented `upsert` to prevent duplicate GitHub profiles
- Structured backend using MVC architecture (Controller, Routes, Config)
- Added error handling for API failures
- Modular and scalable code structure
- Clean REST API design for better maintainability


## 🚀 Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/your-username/github-profile-analyzer.git
cd github-profile-analyzer

## 2. Install Dependencies

```bash
npm install

```md
### 3. Setup Environment Variables

Create `.env` file:

```env
DATABASE_URL="mysql://root:password@localhost:3306/github_analyzer"
PORT=3000

4. Run Prisma Migration
npx prisma migrate dev --name init

5. Start Server
npm run dev

📡 API Endpoints
🔍 Analyze GitHub Profile
POST /api/profiles/analyze/:username

Example:
POST /api/profiles/analyze/rohit-14361

📋 Get All Profiles
GET /api/profiles

👤 Get Single Profile
GET /api/profiles/:username

🧠 Example Response
{
  "id": 1,
  "username": "rohit-14361",
  "name": "Rohit Kumar",
  "followers": 5,
  "following": 3,
  "publicRepos": 12
}


📊 Insights Generated
Followers count
Following count
Public repositories

👨‍💻 Author

Rohit Kumar
# 🚀 Done
