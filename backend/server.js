import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let users = [];
let devices = [];
let alerts = [];

/* LOGIN */
app.post("/login", (req, res) => {
  res.json({ token: "demo-token" });
});

/* INVITE */
app.post("/invite", (req, res) => {
  users.push(req.body);
  res.send("invited");
});

/* ENROL DEVICE */
app.post("/enrol", (req, res) => {
  devices.push(req.body);
  res.send("enrolled");
});

/* BLOCK LOG */
app.post("/block", (req, res) => {
  alerts.push(req.body);
  res.send("logged");
});

/* REPORTS */
app.get("/reports", (req, res) => {
  res.json(alerts);
});

app.listen(4000, () => console.log("running"));
``
