
import { Error } from "./models/Error";
import { Book } from "./models/Book";

export class Validator {

  static booksPostError(book: Book): Error[] {
    let errors: Error[] = [];
    console.log(book);

    if (!book) {
      errors.push(new Error("book", "You must fill the form!"));
      return errors;
    }
    if (!book.title) {
      errors.push(
        new Error("book.title", "Title is required!")
      );
    }
    if (!book.firstName) {
      errors.push(
        new Error("book.firstName", "First name is required!")
      );
    }
    if (!book.lastName) {
      errors.push(
        new Error("book.lastName", "Last name is required!")
      );
    }
    if (!book.publisher) {
      errors.push(
        new Error("book.publisher", "Publisher is required!")
      );
    }
    if (!book.pageNumber) {
      errors.push(
        new Error("book.pageNumber", "Page number is required!")
      );
    }
    if (!book.coverType) {
      errors.push(
        new Error("book.coverType", "Cover type is required!")
      );
    }
    if (!book.releaseDate) {
      errors.push(
        new Error("book.releaseDate", "Release date is required!")
      );
    }
    if (!book.description) {
      errors.push(
        new Error("book.description", "Description is required!")
      );
    }
    if (!book.amount) {
      errors.push(
        new Error("book.amount", "Amount is required!")
      );
    }
    return errors;
  }
}