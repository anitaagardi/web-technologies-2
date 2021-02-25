const express = require('express');

const Car = require('../models/car');
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.get('', checkAuth, (req, res, next) => {
  Car.find().then(documents => {
    res.status(200).json({
      message: 'Cars fetched successfully!',
      cars: documents
    });
  });
});

router.get('/:id', checkAuth, (req, res, next) => {
  Car.findById(req.params.id).then(car => {
    if(car) {
      res.status(200).json(car);
    } else {
      res.status(404).json({message: 'Car not found!'});
    }
  });
});

router.post('', checkAuth, (req, res, next) => {
  const car = new Car({
    Name: req.body.Name,
    Consumption: req.body.Consumption,
    Color: req.body.Color,
    Manufacturer: req.body.Manufacturer,
    Available: req.body.Available,
    Year: req.body.Year,
    Horsepower: req.body.Horsepower
  });
  car.save().then((createdCar) => {
    res.status(201).json({
      message: 'Car added successfully',
      carID: createdCar._id
    });
  })
});

router.put('/:id', checkAuth, (req, res, next) => {
  const car = new Car({
    _id: req.body.id,
    Name: req.body.Name,
    Consumption: req.body.Consumption,
    Color: req.body.Color,
    Manufacturer: req.body.Manufacturer,
    Available: req.body.Available,
    Year: req.body.Year,
    Horsepower: req.body.Horsepower
  });
  Car.updateOne({_id: req.params.id}, car).then(result => {
    console.log(result);
    res.status(200).json({message: 'Update successful!'});
  });
});

router.delete('/:id', checkAuth, (req, res, next) => {
  Car.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({message: 'Car deleted!'});
  })
});

module.exports = router;
