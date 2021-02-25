import { mongoService } from "./MongoService";
import { Book } from "../models/Book";
import { ObjectId } from "mongodb";

export async function createBook() {
    await mongoService.createCollection("Book");
}
export async function insertBook(book: Book) {
    await mongoService.insertOneCollection("Book", book);
}

export async function listBook(): Promise<Book[]> {
    return await mongoService.listCollection("Book", {}, {});
}

export async function updateBook(book: Book) {
    await mongoService.updateOneCollection("Book", { _id: new ObjectId(book._id) }, { $set: { amount: book.amount } });
}

export async function deleteBook(bookId: string) {
    await mongoService.deleteOneCollection("Book", { _id: new ObjectId(bookId) });
}