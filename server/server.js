"use strict";

//import Express.js
const express = require("express");
const path = require("path");

// Initialize instance of Express.js
const app = express();
// Specify on which port the Express.js server will run
const PORT = process.env.PORT || 3001;

// json body parser for express
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// });

app.get("/test", (req, res) => {
  res.json("Testing, testing...");
});

// listen() method is responsible for listening for incoming connections on the specified port
app.listen(PORT, () =>
  console.log(`App is now listening at http://localhost:${PORT}`)
);
