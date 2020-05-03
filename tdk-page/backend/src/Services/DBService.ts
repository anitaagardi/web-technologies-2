import { mongoService } from "./MongoService";
export async function createDB() {
    await mongoService.createDB();
}