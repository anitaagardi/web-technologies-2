let express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  dbConfig = require('./database/db');

let now = new Date();

// Connecting with mongo db
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database sucessfully connected')
},
  error => {
    console.log('Database could not connected: ' + error)
  }
)

// Setting up port with express js
const productRoute = require('../backend/routes/product.route')
const userRoute = require('../backend/routes/user.route')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


app.use(cors());
app.use(express.static(path.join(__dirname, 'dist/meanapp')));
app.use('/', express.static(path.join(__dirname, 'dist/meanapp')));
app.use('/api', productRoute)
app.use('/api', userRoute)

// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Listening on port: ' + port + " Time: " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds())
});
