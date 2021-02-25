const express = require('express');
const app = express();
const customerRoutes = express.Router();

let Customer = require('../models/Customer');

customerRoutes.route('/customerAdd').post(function (req, res) {
  let customer = new Customer(req.body);
  customer.save().then(customer => {
      res.status(200).json({'customer': 'customer in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
customerRoutes.route('/getCustomer').get(function (req, res) {
  Customer.find(function (err, customer){
    if(err){
      console.log(err);
    }
    else {
      res.json(customer);
    }
  });
});

//Get Customer by ID
customerRoutes.route('/getCustomer/:id').get(function (req, res) {
  let id = req.params.id;
  Customer.findById(id,function (err, customer){
    if(err) res.json(err);
    else
      res.json(customer);
  });
});


customerRoutes.route('/editCustomer/:id').get(function (req, res) {
  let id = req.params.id;
  Customer.findById(id,function (err, customer){
    if(err) res.json(err);
    else
    res.json(customer);
  });
});

customerRoutes.route('/getCustomer/delete/:id').get(function (req, res) {
  Customer.findByIdAndRemove({_id: req.params.id}, function(err, customer){
    if(err) res.json(err);
    else res.json('Successfully removed');
  });
});

customerRoutes.route('/customerUpdate/:id').post(function (req, res, next) {
  Customer.findById(req.params.id, function(err, customer) {
    if (!customer)
      return next(new Error('Could not load Document'));
    else {
        customer.first_name = req.body.first_name;
        customer.last_name = req.body.last_name;
        customer.phone_number = req.body.phone_number;
        customer.ID_Number = req.body.ID_Number;
        customer.address.zip_code = req.body.address.zip_code;
        customer.address.city_ = req.body.address.city_;
        customer.address.street = req.body.address.street;
        customer.address.house_number = req.body.address.house_number;
        customer.save().then(customer => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

module.exports = customerRoutes;
