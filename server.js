const express = require("express");
const path = require("path");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

const axios = require("axios");

const mongoose = require("mongoose");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

// Define API routes here
app.use(routes);

// app.get("/scrape", function (req, res) {
//   // First, we grab the body of the html with axios
//   axios.get("https://www.googleapis.com/books/v1/volumes?q=inauthor:dav+pilkey&orderBy=newest&key=AIzaSyBvrAqrUn3DQqWapuse08m421Df1ZU5ZcU").then(function (response) {
//     // Then, we load that into cheerio and save it to $ for a shorthand selector
//     console.log(response.data);
//   });
//   // Send a message to the client
//   res.send("Scrape Complete");
// }); 


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
