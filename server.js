const express = require("express");
const mongoose = require("mongoose");

const users = require("./routers/api/users");
const profile = require("./routers/api/profile");
const posts = require("./routers/api/posts");

const app = express();

// DB config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB

mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected !!!"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello Suraj!"));

app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/profile", profile);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
