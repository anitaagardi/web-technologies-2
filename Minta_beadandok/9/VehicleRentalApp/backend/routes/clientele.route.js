const express = require('express');
const app = express();
const clienteleRoute = express.Router();

// Clientele model
let Clientele = require('../models/Clientele');

// Add Clientele
clienteleRoute.route('/createClientele').post((req, res, next) => {
  Clientele.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Clientele
clienteleRoute.route('/allClientele').get((req, res) => {
  Clientele.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single clientele
clienteleRoute.route('/readClientele/:id').get((req, res) => {
  Clientele.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update vehicle
clienteleRoute.route('/updateClientele/:id').put((req, res, next) => {
  Clientele.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete vehicle
clienteleRoute.route('/deleteClientele/:id').delete((req, res, next) => {
  Clientele.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = clienteleRoute;
