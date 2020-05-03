"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Configuration_1 = require("../Configuration");
var MongoClient = require("mongodb");
var MongoService = /** @class */ (function () {
    function MongoService(url, databaseName) {
        this.url = url;
        this.databaseName = databaseName;
    }
    MongoService.prototype.createDB = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(_this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            })
                .then(function (db) { console.log('DB Connected!'); db.close(); resolve(); })
                .catch(function (err) {
                console.log('DB Connection Error: ${err.message}');
                reject(err.message);
            });
        });
    };
    MongoService.prototype.createCollection = function (collectionName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(_this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            }).then(function (db) {
                var dbo = db.db(_this.databaseName);
                return dbo.createCollection(collectionName).then(function (result) {
                    console.log("Collection " + collectionName + " created!");
                    db.close();
                    resolve();
                }, function (error) {
                    throw error;
                }).catch(function (error) {
                    db.close();
                    reject(error.message);
                }).finally(function () {
                    //db.close();
                });
            }, function (error) {
                console.log(error);
                reject(error.message);
            });
        });
    };
    MongoService.prototype.insertOneCollection = function (collectionName, collection) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(_this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            })
                .then(function (db) {
                var dbo = db.db(_this.databaseName);
                return dbo.collection(collectionName).insertOne(collection, {
                /*useUnifiedTopology: true,
                useNewUrlParser: true,*/
                }).then(function (collection) {
                    if (collection.insertedCount != 1) {
                        throw new Error("Nem sikerült a felvitel");
                    }
                    db.close();
                    resolve();
                }).catch(function (err) {
                    console.log("DB Connection Error: " + err.message);
                    db.close();
                    reject(err.message);
                }).finally(function () {
                    console.log('Close DB');
                    //db.close();
                });
            });
        });
    };
    MongoService.prototype.listCollection = function (collectionName, query1, query2) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(_this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            })
                .then(function (db) {
                var dbo = db.db(_this.databaseName);
                return dbo.collection(collectionName).find(query1, query2).toArray().then(function (collection) {
                    db.close();
                    resolve(collection);
                }).catch(function (err) {
                    console.log("DB Connection Error: " + err.message);
                    db.close();
                    reject(err.message);
                }).finally(function () {
                    console.log('Close DB');
                    //db.close();
                });
            });
        });
    };
    MongoService.prototype.updateOneCollection = function (collectionName, query, newValues) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(_this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            })
                .then(function (db) {
                var dbo = db.db(_this.databaseName);
                console.log(newValues);
                return dbo.collection(collectionName).updateOne(query, newValues).then(function (collection) {
                    console.log(collection);
                    if (collection.modifiedCount == 0) {
                        throw new Error("Nem sikerült a módosítás");
                    }
                    db.close();
                    resolve();
                }).catch(function (err) {
                    console.log("DB Error: " + err.message);
                    //error = err;
                    db.close();
                    reject(err.message);
                }).finally(function () {
                    console.log('Close DB');
                    //db.close();
                });
            });
        });
    };
    MongoService.prototype.deleteOneCollection = function (collectionName, query) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(_this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            })
                .then(function (db) {
                var dbo = db.db(_this.databaseName);
                return dbo.collection(collectionName).deleteOne(query).then(function (collection) {
                    if (collection.deletedCount == 0) {
                        throw new Error("Nem sikerült a törlés");
                    }
                    db.close();
                    resolve();
                }).catch(function (err) {
                    console.log("DB Connection Error: " + err.message);
                    db.close();
                    reject(err.message);
                }).finally(function () {
                    console.log('Close DB');
                    //db.close();
                });
            });
        });
    };
    MongoService.prototype.deleteCollection = function (collectionName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            MongoClient.connect(_this.url, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            })
                .then(function (db) {
                var dbo = db.db(_this.databaseName);
                return dbo.collection(collectionName).drop().then(function (collection) {
                    if (collection.deletedCount == 0) {
                        throw new Error("Nem sikerült a törlés");
                    }
                    db.close();
                    resolve(collection);
                }).catch(function (err) {
                    console.log("DB Connection Error: " + err.message);
                    db.close();
                    reject(err.message);
                }).finally(function () {
                    console.log('Close DB');
                    //db.close();
                });
            });
        });
    };
    return MongoService;
}());
exports.mongoService = new MongoService(Configuration_1.URL, Configuration_1.DATABASENAME);
