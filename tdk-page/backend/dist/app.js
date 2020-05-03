"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var Application_1 = require("./Model/Application");
var Validator_1 = require("./Validator");
var ApplicationService_1 = require("./Services/ApplicationService");
exports.app = express();
var bodyParser = require('body-parser');
var url = "mongodb://localhost:27017/tdkDB";
var databaseName = "tdkDB";
exports.app.use(bodyParser.urlencoded({ extended: true }));
exports.app.use(bodyParser.json());
exports.app.options('*', cors());
// Add headers
exports.app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Pass to next layer of middleware
    next();
});
exports.app.post('/applications', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var application, errors, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    application = new Application_1.Application(req.body);
                    errors = [];
                    errors.push.apply(errors, Validator_1.Validator.applicationsPostError(application));
                    console.log(errors);
                    if (errors.length > 0) {
                        console.log(errors);
                        return [2 /*return*/, res.status(500).send(errors)];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, ApplicationService_1.insertApplication(application)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    console.log(e_1);
                    return [2 /*return*/, res.status(500).send(e_1)];
                case 4: return [2 /*return*/, res.status(200).send()];
            }
        });
    });
});
exports.app.get('/applications', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var applications, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    applications = [];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, ApplicationService_1.listApplication()];
                case 2:
                    //await createDB();
                    //await createApplication();
                    applications = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _a.sent();
                    console.log(e_2);
                    return [2 /*return*/, res.status(500).send(e_2)];
                case 4: return [2 /*return*/, res.status(200).send(applications)];
            }
        });
    });
});
exports.app.put('/applications', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var application, errors, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    application = new Application_1.Application(req.body);
                    errors = [];
                    errors.push.apply(errors, Validator_1.Validator.applicationsPostError(application));
                    if (errors.length > 0) {
                        console.log(errors);
                        return [2 /*return*/, res.status(500).send(errors)];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, ApplicationService_1.updateApplication(application)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_3 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_3)];
                case 4: return [2 /*return*/, res.status(200).send()];
            }
        });
    });
});
//delete conference (if the details of the conference is bad)
exports.app.delete('/applications/:applicationId', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var applicationId, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    applicationId = req.params.applicationId;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, ApplicationService_1.deleteApplication(applicationId)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_4 = _a.sent();
                    return [2 /*return*/, res.status(500).send(e_4)];
                case 4: return [2 /*return*/, res.status(200).send()];
            }
        });
    });
});
