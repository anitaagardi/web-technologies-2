import { mongoDBService } from "./MongoDBService";
export async function createDataBase() {
  await mongoDBService.createDataBase();
}
