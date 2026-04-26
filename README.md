📘 Crime Data Analysis and Management System

📌 Project Description
The Crime Management System is a web-based application developed to manage crime records efficiently. It allows users to add, view, delete, and filter crime data stored in a database.

🚀 Features
➕ Add new crime records

📋 View all crimes in table format

❌ Delete records

🔍 Filter crimes by type and status

🌐 REST API integration

📊 Real-time data display

🛠️ Technologies Used
Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express.js

Database: MySQL

Tools: VS Code, Browser

🗄️ Database Structure
Table: Crime
Field	Type	Description
crime_id	INT (PK)	Unique ID (Auto Increment)
crime_type	VARCHAR	Type of crime
location_id	INT	Location identifier
status	VARCHAR	Crime status
date_time	TIMESTAMP	Date & time of record
⚙️ Installation & Setup
1️⃣ Clone / Download Project
2️⃣ Install Dependencies
npm install express mysql cors
3️⃣ Setup Database
Run SQL:

CREATE DATABASE crime_db;
USE crime_db;

CREATE TABLE Crime (
  crime_id INT AUTO_INCREMENT PRIMARY KEY,
  crime_type VARCHAR(50),
  location_id INT,
  status VARCHAR(20),
  date_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
4️⃣ Start Backend
node server.js
5️⃣ Run Frontend
Open:

index.html
🌐 API Endpoints
Method	Endpoint	Description
GET	/crimes	Get all records
POST	/addCrime	Add new crime
DELETE	/deleteCrime/:id	Delete crime
GET	/filter	Filter records
📸 Output
Displays crime records in a table

Allows insertion and deletion

Shows filtered results

✅ Conclusion
The system successfully performs CRUD operations and demonstrates the integration of frontend, backend, and database in a full-stack application.

👨‍💻 Author
Sunkara Naga Varshith
