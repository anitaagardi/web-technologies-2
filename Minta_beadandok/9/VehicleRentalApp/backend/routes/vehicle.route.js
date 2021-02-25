const express = require('express');
const app = express();
const vehicleRoute = express.Router();

// Clientele model
let Clientele = require('../models/Vehicle');

// Add Clientele
vehicleRoute.route('/createVehicle').post((req, res, next) => {
  Clientele.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Clientele
vehicleRoute.route('/allVehicle').get((req, res) => {
  Clientele.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single clientele
vehicleRoute.route('/readVehicle/:id').get((req, res) => {
  Clientele.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update vehicle
vehicleRoute.route('/updateVehicle/:id').put((req, res, next) => {
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
vehicleRoute.route('/deleteVehicle/:id').delete((req, res, next) => {
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

module.exports = vehicleRoute;
