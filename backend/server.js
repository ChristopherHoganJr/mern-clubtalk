require("dotenv").config();
const express = require("express");

const DB = process.env.MONGODB_URI;

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`server is listening on port:${port}`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
