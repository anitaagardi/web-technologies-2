const express = require('express');
const app = express();
const DVDRoutes = express.Router();


let DVD = require('../models/DVD');

DVDRoutes.route('/addDVD').post(function (req, res) {
  let dvd = new DVD(req.body);
  dvd.save()
    .then(dvd => {
      res.status(200).json({'DVD': 'DVD added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

DVDRoutes.route('/getDVD').get(function (req, res) {
  DVD.find(function (err, dvd){
    if(err){
      console.log(err);
    }
    else {
      res.json(dvd);
    }
  });
});

DVDRoutes.route('/getWasted/:id').post(function (req, res, next) {
  DVD.findOneAndUpdate({_id: req.params.id},
    {$set:{state: req.body.state}},
    (err, dvd)=> {
      if (err) {
        return next(new Error('Could not load Document'));
      }
      else {
        res.json('Update complete')
      }
    });
});

DVDRoutes.route('/getBorrowed/:id').post(function (req, res, next) {
  DVD.findOneAndUpdate({_id: req.params.id},
    {$set:{state: req.body.state}},
    (err, dvd)=> {
      if (err) {
        return next(new Error('Could not load Document'));
      }
      else {
        res.json('Update complete')
      }
    });
});

DVDRoutes.route('/getFree/:id').post(function (req, res, next) {
  DVD.findOneAndUpdate({_id: req.params.id},
    {$set:{state: req.body.state}},
    (err, dvd)=> {
      if (err) {
        return next(new Error('Could not load Document'));
      }
      else {
        res.json('Update complete')
      }
    });
});

DVDRoutes.route('/getDVD/delete/:id').get(function (req, res) {
  DVD.findByIdAndRemove({_id: req.params.id}, function(err, dvd){
    if(err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = DVDRoutes;
