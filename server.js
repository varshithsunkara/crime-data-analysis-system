const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234", // change if needed
  database: "crime_db"
});

db.connect(err => {
  if (err) console.log("DB ERROR:", err);
  else console.log("✅ MySQL Connected");
});

/* GET */
app.get("/crimes", (req, res) => {
  db.query("SELECT * FROM Crime", (err, result) => {
    if (err) {
      console.log(err);
      return res.send([]);
    }
    res.json(result);
  });
});

/* ADD (FIXED) */
app.post("/addCrime", (req, res) => {

  console.log("DATA RECEIVED:", req.body);

  const { crime_type, location_id, status } = req.body;

  if (!crime_type || !location_id || !status) {
    return res.status(400).send("Missing Data");
  }

  db.query(
    "INSERT INTO Crime (crime_type, location_id, status) VALUES (?, ?, ?)",
    [crime_type, parseInt(location_id), status],
    (err, result) => {
      if (err) {
        console.log("DB ERROR:", err);
        return res.status(500).send("Insert Failed");
      }

      console.log("✅ INSERT SUCCESS");
      res.send("Added");
    }
  );
});

/* DELETE */
app.delete("/deleteCrime/:id", (req, res) => {
  db.query(
    "DELETE FROM Crime WHERE crime_id=?",
    [req.params.id],
    (err) => {
      if (err) {
        console.log(err);
        return res.send("Error");
      }
      res.send("Deleted");
    }
  );
});

/* FILTER */
app.get("/filter", (req, res) => {
  const { type, status } = req.query;

  db.query(
    "SELECT * FROM Crime WHERE crime_type=? AND status=?",
    [type, status],
    (err, result) => {
      if (err) return res.send([]);
      res.json(result);
    }
  );
});

app.listen(3000, () => console.log("🚀 Server running on port 3000"));
