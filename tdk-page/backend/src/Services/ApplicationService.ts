
import { mongoService } from "./MongoService";
import { Application } from "../Model/Application";
import { ObjectId } from "mongodb";

export async function createApplication() {
    await mongoService.createCollection("Application");
}
export async function insertApplication(application: Application) {
    await mongoService.insertOneCollection("Application", application);
}

export async function listApplication(): Promise<Application[]> {
    return await mongoService.listCollection("Application", {}, {});
}
export async function updateApplication(application: Application) {
    await mongoService.updateOneCollection("Application", { _id: new ObjectId(application._id) }, { $set: { status: application.status } });
}
export async function deleteApplication(applicationId: string) {
    await mongoService.deleteOneCollection("Application", { _id: new ObjectId(applicationId) });
}
