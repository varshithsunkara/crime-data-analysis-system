🚔 Crime Data Analysis and Management System

📌 Overview
The Crime Management System is a full-stack web application designed to manage and track crime records efficiently. It allows users to perform CRUD operations (Create, Read, Update, Delete) through a simple and interactive interface.

✨ Features
➕ Add new crime records

📋 View all records in a dynamic table

❌ Delete existing records

🔍 Filter crimes by type and status

⚡ Real-time updates without page refresh

🌐 REST API integration

🛠️ Tech Stack
Frontend
HTML

CSS (Modern UI + Animations)

JavaScript

Backend
Node.js

Express.js

Database
MySQL

🗄️ Database Schema
Table: Crime
Column	Type	Description
crime_id	INT (PK)	Auto-increment unique ID
crime_type	VARCHAR	Type of crime
location_id	INT	Location identifier
status	VARCHAR	Status (Pending/Solved)
date_time	TIMESTAMP	Record creation time
⚙️ Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/your-username/crime-management-system.git
cd crime-management-system
2️⃣ Install Dependencies
npm install express mysql cors
3️⃣ Setup Database
Open MySQL and run:

CREATE DATABASE crime_db;
USE crime_db;

CREATE TABLE Crime (
  crime_id INT AUTO_INCREMENT PRIMARY KEY,
  crime_type VARCHAR(50),
  location_id INT,
  status VARCHAR(20),
  date_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
4️⃣ Run Backend Server
node server.js
You should see:

✅ MySQL Connected
🚀 Server running on port 3000
5️⃣ Run Frontend
Simply open:

index.html
🌐 API Endpoints
Method	Endpoint	Description
GET	/crimes	Fetch all records
POST	/addCrime	Add new record
DELETE	/deleteCrime/:id	Delete record
GET	/filter	Filter records
📸 Screenshots
Add your project screenshots here (UI, database, API output, etc.)

✅ Project Status
✔ Fully Functional
✔ Backend Connected
✔ Database Integrated

📚 Learning Outcomes
Full-stack development basics

REST API creation

Database integration

Frontend-backend communication

👨‍💻 Author
Sunkara Naga Varshith

⭐ Support
If you like this project, give it a ⭐ on GitHub!
