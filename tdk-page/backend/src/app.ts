import * as express from "express";
import * as cors from "cors";
import { Application } from "./Model/Application";

import { Error } from './Model/Error';
import { Validator } from "./Validator";
import { insertApplication, listApplication, updateApplication, deleteApplication, createApplication } from "./Services/ApplicationService";
import { createDB } from "./Services/DBService";

export const app = express()

const bodyParser = require('body-parser')
const url = "mongodb://localhost:27017/tdkDB";

const databaseName = "tdkDB";

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
app.options('*', cors());
// Add headers
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
app.post('/applications', async function (req, res) {
    const application: Application = new Application(req.body);
    let errors: Error[] = [];


    errors.push.apply(errors, Validator.applicationsPostError(application));
    console.log(errors);
    if (errors.length > 0) {
        console.log(errors);
        return res.status(500).send(errors);
    }
    try {
        await insertApplication(application);
    } catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
    return res.status(200).send();

});

app.get('/applications', async function (req, res) {
    let applications: Application[] = [];
    try {
        //await createDB();
        //await createApplication();
        applications = await listApplication();
    } catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
    return res.status(200).send(applications);
});

app.put('/applications', async function (req, res) {
    const application: Application = new Application(req.body);
    let errors: Error[] = [];
    errors.push.apply(errors, Validator.applicationsPostError(application));
    if (errors.length > 0) {
        console.log(errors);
        return res.status(500).send(errors);
    }
    try {
        await updateApplication(application);
    } catch (e) {
        return res.status(500).send(e);
    }
    return res.status(200).send();
});



//delete conference (if the details of the conference is bad)
app.delete('/applications/:applicationId', async function (req, res) {
    const applicationId = req.params.applicationId;
    try {
        await deleteApplication(applicationId);
    } catch (e) {
        return res.status(500).send(e);
    }
    return res.status(200).send();

});



