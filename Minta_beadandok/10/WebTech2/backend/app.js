const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/angularApp';

const manufacturersRoutes = require("./routes/manufacturers");
const carsRoutes = require("./routes/cars");
const userRoutes = require("./routes/user");

const app = express();
//"mongodb+srv://Peter:YD8yn6CqKllhlGRw@cluster0-0hx5u.mongodb.net/test-angularApp?retryWrites=true&w=majority"

mongoose.connect(url, { useNewUrlParser: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log('Database connected:', url)
});
db.on('error', err => {
  console.log('Connection error:', err)
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH, OPTIONS, PUT");
  next();
});

app.use("/api/manufacturers", manufacturersRoutes);
app.use("/api/cars", carsRoutes);
app.use("/api/users", userRoutes);

module.exports = app;
