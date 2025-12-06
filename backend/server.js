const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();

app.use(cors()); // allow frontend calls
app.use(express.json()); // parse JSON request bodies

// ---- START SERVER ----
app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});

// ---- ONBOARD ROUTE ----
app.post("/onboard", (req, res) => {
  const filePath = "./data/Onboarding.json";

  // Load existing users
  const users = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const { email, name, role } = req.body;

  if (users[email]) {
    return res.status(400).json({ error: "Email already exists" });
  }
  const newUser = {
    id: Object.keys(users).length + 1,
    name: name,
    role: role,
  };

  // Add new user
  users[email] = newUser;

  // Save file
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

  res.json({ success: true, user: newUser });
});

// ---- SIGNUP ROUTE ----
app.post("/signup", (req, res) => {
  const existingEmpPath = "./data/Employees.json";
  const newEmpPath = "./data/Onboarding.json";
  const publicPath = "./data/EmployeesPublic.json";

  // Load existing users
  const currUsers = JSON.parse(fs.readFileSync(existingEmpPath, "utf8"));
  const newUsers = JSON.parse(fs.readFileSync(newEmpPath, "utf8"));
  const publicInfo = JSON.parse(fs.readFileSync(publicPath, "utf8"));

  const { email, name, password } = req.body;

  if (currUsers[email]) {
    return res.status(400).json({
      error:
        "Email already exists, please contact HR to confirm sign up credentials",
    });
  } else if (!newUsers[email] || name !== newUsers[email].name) {
    return res.status(400).json({
      error:
        "Incorrect email or name, please contact HR to confirm sign up credentials",
    });
  }

  const newUser = {
    id: newUsers[email].id,
    name: name,
    password: password,
    role: newUsers[email].role,
    pic: null,
  };
  const newPubUser = {
    name: name,
    role: newUsers[email].role,
    pic: null,
  };

  // Add new user
  currUsers[email] = newUser;
  publicInfo[email] = newPubUser;
  // Save file
  fs.writeFileSync(existingEmpPath, JSON.stringify(currUsers, null, 2));
  fs.writeFileSync(publicPath, JSON.stringify(publicInfo, null, 2));

  res.json({ success: true, user: newUser });
});

// ---- LOGIN ROUTE ----
app.post("/login", (req, res) => {
  const filePath = "./data/Employees.json";
  const users = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const { email, password } = req.body;
  // Check if user exists
  if (!users[email]) {
    return res.status(400).json({ error: "User not found" });
  }

  const user = users[email];

  // Check password
  if (user.password !== password) {
    return res.status(401).json({ error: "Incorrect password" });
  }

  // LOGIN SUCCESS
  res.json({
    success: true,
    user,
  });
});

// ---- SEND PROFILES ROUTE ----
app.get("/profiles", (req, res) => {
  const filePath = "./data/EmployeesPublic.json";
  const users = JSON.parse(fs.readFileSync(filePath, "utf8"));
  res.json({
    message: users,
  });
});
