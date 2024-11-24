const mongoose = require("mongoose");

module.exports = (DB) => {
  mongoose
    .connect(DB)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Cannot to connect to MongoDB", err);
    });
};
