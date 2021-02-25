let express = require('express'),
  path = require('path'),
  bodyParser = require ('body-parser'),
  cors = require ('cors'),
  mongoose = require ('mongoose'),
  config = require ('./database/db');
 var autoIncrement = require('mongoose-auto-increment');

var gracefulShutdown;
var dbURI = 'mongodb://localhost:27017/mydb';
if (process.env.NODE_ENV === 'production') {
  dbURI = process.env.MONGOLAB_URI;
}

mongoose.Promise = global.Promise;
mongoose.connect(config.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true}).then(
  () => {console.log('Database is connected')},
  err => {console.log('Can not connect to the database' + err)}
);
autoIncrement.initialize(mongoose.connection);

// CONNECTION EVENTS
mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});
gracefulShutdown = function(msg, callback) {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};
// For nodemon restarts
process.once('SIGUSR2', function() {
  gracefulShutdown('nodemon restart', function() {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// For app termination
process.on('SIGINT', function() {
  gracefulShutdown('app termination', function() {
    process.exit(0);
  });
});
// For Heroku app termination
process.on('SIGTERM', function() {
  gracefulShutdown('Heroku app termination', function() {
    process.exit(0);
  });
});

const connectionRoute = require('./routes/connection.route'),
  customerRoute = require('./routes/customer.route'),
  DVDRoute = require('./routes/DVD.route');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist/Registry')));
app.use('/', express.static(path.join(__dirname, 'dist/Registry')));
app.use('/app', connectionRoute);
app.use('/app', customerRoute);
app.use('/app', DVDRoute);
const port = process.env.PORT || 4000;
var version=process.env.version || "1.0"

const server = app.listen(port, () => {
  console.log('Listening on port ' + port);
  console.log('Version '+version);
})
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message); // Log error message in our server's console
  if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});
