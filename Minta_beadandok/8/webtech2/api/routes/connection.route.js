const express = require('express');
const app = express();
const connectionRoutes = express.Router();

let Connection = require('../models/Connection');

connectionRoutes.route('/ConnectionAdd').post(function (req, res) {
  let connection = new Connection(req.body);
  connection.save()
    .then(connection => {
      res.status(200).json({'connection': 'business in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

connectionRoutes.route('/getConnection').get(function (req, res) {
  Connection.find(function (err, connection){
    if(err){
    }
    else {
      res.json(connection);
    }
  });
});

connectionRoutes.route('/editConnection/:id').get(function (req, res) {
  let id = req.params.id;
  Connection.findById(id, function (err, connection){
    res.json(connection);
  });
});

connectionRoutes.route('/updateConnectionWithDVD/:id').post(function (req, res, next) {
  Connection.findByIdAndUpdate(req.params.id, {$push: {dvd: req.body}},
    {safe: true, upsert: true}, function (err, connection) {
    if (err) {
      console.log(err);
      return res.send(err);
    }
    return res.json(connection);

  });
});

connectionRoutes.route('/updateConnectionWithCustomer/:id').post(function (req, res, next) {
  Connection.findOneAndUpdate({_id: req.params.id},{$set:{customer: req.body.customer}},
    (err, connection)=> {
      console.log(connection)
    if (err) {
      return next(new Error('Could not load Document'));
    }
    else {
res.json('Update complete')
    }
  });
});

connectionRoutes.route('/bringBack/:id').post(function (req, res, next) {
  Connection.findByIdAndUpdate(req.params.id, {$pull: {dvd: req.body}},
    {safe: true, upsert: true}, function (err, connection) {
      if (err) {
        console.log(err);
        return res.send(err);
      }
      return res.json(connection);
    });
});

connectionRoutes.route('/getConnection/delete/:id').get(function (req, res) {
  Connection.findByIdAndRemove({_id: req.params.id}, function(err, connect){
    if(err) res.json(err);
    else res.json('Successfully removed');
  });
});
module.exports = connectionRoutes;
