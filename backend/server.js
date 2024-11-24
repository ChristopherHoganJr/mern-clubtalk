// Initiate the server and environment variables
require("dotenv").config();
const express = require("express");

// Database connection
const DB = process.env.MONGODB_URI;
require("./config/mongoose.config")(DB);

// Express server
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send(`server is listening on port:${port}`);
});

// Listen to the port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
