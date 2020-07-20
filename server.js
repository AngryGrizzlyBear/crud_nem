const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function () {
  console.log("listening on 3000");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/quotes", (req, res) => {
  console.log(req.body);
});

MongoClient.connect(
  "mongodb+srv://mario:luigi@cluster0.tvzoj.mongodb.net/qoute-generator?retryWrites=true&w=majority",
  { useUnifiedTopology: true }
)
  .then((client) => {
    console.log("Connected to Database.");
    const db = client.db("random-day-quotes");
    app.use();
    app.get();
    app.post();
    app.listen();
  })
  .catch((error) => console.log(error));
