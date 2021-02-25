import {URL, DBNAME} from "../config";
import * as MongoClient from "mongodb";

class MongoDBService {
  constructor(private url:string, private dbName: string) {}

  createDataBase() : Promise<void> {
    return new Promise<void>((resolve, reject) => {
      MongoClient.connect(this.url, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      })
        .then((db) => {
          console.log("Connected to database.");
          db.close();
          resolve();
        })
        .catch((err) => {
          console.log("Error occurred while connecting to database : " + err.message);
          reject(err.message);
        })
    })
  }

  createCollection(name: string): Promise<void> {
    return new Promise((resolve, reject) => {
      MongoClient.connect(this.url, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      })
        .then((db) => {
          var dbo = db.db(this.dbName);
          return dbo.createCollection(name)
            .then((result) => {
              console.log(name + " created.");
              db.close();
              resolve();
            }, (err) => {
              throw err;
            })
            .catch((err) => {
              db.close();
              console.log("Error occured while creating collection : " + err.message);
              reject(err.message);
            })
        }, (err) => {
          console.log("CreateCollection onReject Error : " + err.message);
          reject(err.message);
        })
    })
  }

  insertOneCollection(name: string, collection: any): Promise<void> {
    return new Promise((resolve, reject) => {
      MongoClient.connect(this.url, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      })
        .then((db) => {
          var dbo = db.db(this.dbName);
          return dbo.collection(name).insertOne(collection)
            .then((collection) => {
              if(collection.insertedCount != 1) {
                throw new Error("Insert failed.");
              }
              db.close();
              resolve();
            })
            .catch((err) => {
              console.log("InsertOneCollection onRejected Error : " + err.message);
              db.close();
              reject(err.message);
            })
        });
    });
  }

  listCollection(name:string, query1: any, query2: any): Promise<any> {
    return new Promise((resolve, reject) => {
      MongoClient.connect(this.url, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      })
        .then((db) => {
          var dbo = db.db(this.dbName);
          return dbo.collection(name).find(query1, query2).toArray()
            .then((collection) => {
              db.close();
              resolve(collection);
            })
            .catch((err) => {
              console.log("ListCollection onRejected Error : " + err.message);
              db.close();
              reject(err.message);
            })
        });
    });
  }

  updateOneCollection(name: string, query: any, newValues: any): Promise<void> {
    return new Promise((resolve, reject) => {
      MongoClient.connect(this.url, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      })
        .then((db) => {
          var dbo = db.db(this.dbName);
          return dbo.collection(name).updateOne(query, newValues)
            .then((collection) => {
              if(collection.modifiedCount == 0) {
                throw new Error("Modification failed.");
              }
              db.close();
              resolve();
            })
            .catch((err) => {
              console.log("UpdateOneCollection onRejected Error : " + err.message);
              db.close();
              reject(err.message);
            })
        });
    });
  }

  deleteOneCollection(name: string, query: any): Promise<void> {
    return new Promise((resolve, reject) => {
      MongoClient.connect(this.url, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      })
        .then((db) => {
          var dbo = db.db(this.dbName);
          return dbo.collection(name).deleteOne(query)
            .then((collection) => {
              if(collection.deletedCount == 0) {
                throw new Error("Deletion failed.");
              }
              db.close();
              resolve();
            })
            .catch((err) => {
              console.log("DeleteOneCollection onRejected Error : " + err.message);
              db.close();
              reject(err.message);
            })
        });
    });
  }

  deleteCollection(name: string): Promise<void> {
    return new Promise((resolve, reject) => {
      MongoClient.connect(this.url, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      })
        .then((db) => {
          var dbo = db.db(this.dbName);
          return dbo.collection(name).drop()
            .then((collection) => {
              if(collection.deletedCount == 0) {
                throw new Error("Collection deletion failed.");
              }
              db.close();
              resolve(collection);
            })
            .catch((err) => {
              console.log("DeleteCollection onRejected Error : " + err.message);
              db.close();
              reject(err.message);
            })
        });
    });
  }
}

export let mongoDBService = new MongoDBService(URL, DBNAME);
