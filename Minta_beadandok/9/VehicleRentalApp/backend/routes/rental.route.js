const express = require('express');
const app = express();
const rentalRoute = express.Router();

// Clientele model
let Clientele = require('../models/Rental');

// Add Clientele
rentalRoute.route('/createRental').post((req, res, next) => {
  Clientele.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Clientele
rentalRoute.route('/allRental').get((req, res) => {
  Clientele.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single clientele
rentalRoute.route('/readRental/:id').get((req, res) => {
  Clientele.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update vehicle
rentalRoute.route('/updateRental/:id').put((req, res, next) => {
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
rentalRoute.route('/deleteRental/:id').delete((req, res, next) => {
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

module.exports = rentalRoute;
