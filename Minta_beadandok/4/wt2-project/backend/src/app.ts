import * as express from "express";
import * as cors from "cors";
import { Watch } from "./Model/Watch";
import { Error } from "./Model/Error";
import { insertWatch, listWatchCollection, updateWatch, deleteWatch, createWatchCollection } from "./Services/WatchService";
import {Validator} from "./Validator";

export const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true}));

app.use(bodyParser.json());
app.options('*', cors());

// Headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Pass to next layer of middleware
  next();
});

app.post('/watches', async function (req, res) {
  const watch: Watch = new Watch(req.body);
  let errors: Error[] = [];
  errors.push.apply(errors, Validator.watchPostError(watch));

  if(errors.length > 0) {
    console.log(errors);
    return res.status(500).send(errors);
  } else {
    console.log("No errors.");
  }

  try {
    await insertWatch(watch);
  } catch (ex) {
    return res.status(500).send(ex);
  }

  return res.status(200).send();
})

app.get('/watches', async function (req, res) {
  let watches: Watch[] = [];

  try {
    watches = await listWatchCollection();
  } catch (ex) {
    console.log(ex);
    return res.status(500).send(ex);
  }

  return res.status(200).send(watches);
});

app.put('/watches', async function (req, res) {
  const watch: Watch = new Watch(req.body);
  let errors: Error[] = [];
  errors.push.apply(errors, Validator.watchPostError(watch));

  if(errors.length > 0) {
    console.log(errors);
    return res.status(500).send(errors);
  } else {
    console.log("No errors.");
  }

  try {
    await updateWatch(watch);
  } catch (ex) {
    return res.status(500).send(ex);
  }

  return res.status(200).send();
});

app.delete('/watches/:watchId', async function (req, res) {
  const watchId = req.params.watchId;
  try {
    await deleteWatch(watchId);
  } catch(ex) {
    return res.status(500).send(ex);
  }

  return res.status(200).send();
})
