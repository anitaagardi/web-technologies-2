const express = require('express');

const Manufacturer = require('../models/manufacturer');
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.get('', checkAuth, (req, res, next) => {
  Manufacturer.find().then(documents => {
    res.status(200).json({
      message: 'Manufacturers fetched successfully!',
      manufacturers: documents
    });
  });
});

router.get('/:id', checkAuth, (req, res, next) => {
  Manufacturer.findById(req.params.id).then(manufacturer => {
    if(manufacturer) {
      res.status(200).json(manufacturer);
    } else {
      res.status(404).json({message: 'Manufacturer not found!'});
    }
  });
});

router.post('', checkAuth, (req, res, next) => {
  const manufacturer = new Manufacturer({
    Name: req.body.Name,
    Country: req.body.Country,
    Founded: req.body.Founded
  });
  manufacturer.save().then((createdManufacturer) => {
    res.status(201).json({
      message: 'Manufacturer added successfully',
      manufacturerID: createdManufacturer._id
    });
  });
});

router.put('/:id', checkAuth, (req, res, next) => {
  const manufacturer = new Manufacturer({
    _id: req.body.id,
    Name: req.body.Name,
    Country: req.body.Country,
    Founded: req.body.Founded
  });
  Manufacturer.updateOne({_id: req.params.id}, manufacturer).then(result => {
    console.log(result);
    res.status(200).json({message: 'Update successful!'});
  });
});

router.delete("/:id", checkAuth, (req, res, next) => {
  Manufacturer.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({message: 'Manufacturer deleted!'});
  });
});

module.exports = router;
