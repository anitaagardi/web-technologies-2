import { mongoDBService } from "./MongoDBService";
import { Watch } from "../Model/Watch";
import { ObjectId } from "mongodb";

export async function createWatchCollection() {
  await mongoDBService.createCollection("Watches");
}

export async function insertWatch(watch: Watch) {
  await mongoDBService.insertOneCollection("Watches", watch);
}

export async function listWatchCollection(): Promise<Watch[]> {
  return await mongoDBService.listCollection("Watches", {}, {});
}

export async function updateWatch(watch: Watch) {
  await mongoDBService.updateOneCollection("Watches",
    {_id: new ObjectId(watch._id) },
    { $set: { price: watch.price }
  });
}

export async function deleteWatch(watchId: string) {
  await mongoDBService.deleteOneCollection("Watches", {_id: new ObjectId(watchId) });
}


