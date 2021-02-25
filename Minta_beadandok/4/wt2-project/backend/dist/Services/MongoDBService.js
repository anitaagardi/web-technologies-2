"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoDBService = void 0;
var config_1 = require("../config");
var MongoClient = require("mongodb");
var MongoDBService = /** @class */ (function () {
    function MongoDBService(url, dbName) {
        this.url = url;
        this.dbName = dbName;
    }
    MongoDBService.prototype.createDataBase = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(_this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true
            })
                .then(function (db) {
                console.log("Connected to database.");
                db.close();
                resolve();
            })
                .catch(function (err) {
                console.log("Error occurred while connecting to database : " + err.message);
                reject(err.message);
            });
        });
    };
    MongoDBService.prototype.createCollection = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(_this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true
            })
                .then(function (db) {
                var dbo = db.db(_this.dbName);
                return dbo.createCollection(name)
                    .then(function (result) {
                    console.log(name + " created.");
                    db.close();
                    resolve();
                }, function (err) {
                    throw err;
                })
                    .catch(function (err) {
                    db.close();
                    console.log("Error occured while creating collection : " + err.message);
                    reject(err.message);
                });
            }, function (err) {
                console.log("CreateCollection onReject Error : " + err.message);
                reject(err.message);
            });
        });
    };
    MongoDBService.prototype.insertOneCollection = function (name, collection) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(_this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true
            })
                .then(function (db) {
                var dbo = db.db(_this.dbName);
                return dbo.collection(name).insertOne(collection)
                    .then(function (collection) {
                    if (collection.insertedCount != 1) {
                        throw new Error("Insert failed.");
                    }
                    db.close();
                    resolve();
                })
                    .catch(function (err) {
                    console.log("InsertOneCollection onRejected Error : " + err.message);
                    db.close();
                    reject(err.message);
                });
            });
        });
    };
    MongoDBService.prototype.listCollection = function (name, query1, query2) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(_this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true
            })
                .then(function (db) {
                var dbo = db.db(_this.dbName);
                return dbo.collection(name).find(query1, query2).toArray()
                    .then(function (collection) {
                    db.close();
                    resolve(collection);
                })
                    .catch(function (err) {
                    console.log("ListCollection onRejected Error : " + err.message);
                    db.close();
                    reject(err.message);
                });
            });
        });
    };
    MongoDBService.prototype.updateOneCollection = function (name, query, newValues) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(_this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true
            })
                .then(function (db) {
                var dbo = db.db(_this.dbName);
                return dbo.collection(name).updateOne(query, newValues)
                    .then(function (collection) {
                    if (collection.modifiedCount == 0) {
                        throw new Error("Modification failed.");
                    }
                    db.close();
                    resolve();
                })
                    .catch(function (err) {
                    console.log("UpdateOneCollection onRejected Error : " + err.message);
                    db.close();
                    reject(err.message);
                });
            });
        });
    };
    MongoDBService.prototype.deleteOneCollection = function (name, query) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(_this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true
            })
                .then(function (db) {
                var dbo = db.db(_this.dbName);
                return dbo.collection(name).deleteOne(query)
                    .then(function (collection) {
                    if (collection.deletedCount == 0) {
                        throw new Error("Deletion failed.");
                    }
                    db.close();
                    resolve();
                })
                    .catch(function (err) {
                    console.log("DeleteOneCollection onRejected Error : " + err.message);
                    db.close();
                    reject(err.message);
                });
            });
        });
    };
    MongoDBService.prototype.deleteCollection = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(_this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true
            })
                .then(function (db) {
                var dbo = db.db(_this.dbName);
                return dbo.collection(name).drop()
                    .then(function (collection) {
                    if (collection.deletedCount == 0) {
                        throw new Error("Collection deletion failed.");
                    }
                    db.close();
                    resolve(collection);
                })
                    .catch(function (err) {
                    console.log("DeleteCollection onRejected Error : " + err.message);
                    db.close();
                    reject(err.message);
                });
            });
        });
    };
    return MongoDBService;
}());
exports.mongoDBService = new MongoDBService(config_1.URL, config_1.DBNAME);
