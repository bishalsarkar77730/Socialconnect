import express from "express";
import dotenv from "dotenv";
import mysql from "mysql";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
dotenv.config();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected successfully");
});

app.listen(process.env.LOCAL_HOST_PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.LOCAL_HOST_PORT}`);
});
