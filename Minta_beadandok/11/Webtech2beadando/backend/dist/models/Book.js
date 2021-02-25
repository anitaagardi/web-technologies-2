"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book = /** @class */ (function () {
    function Book(book) {
        this._id = book._id;
        this.title = book.title;
        this.firstName = book.firstName;
        this.lastName = book.lastName;
        this.publisher = book.publisher;
        this.pageNumber = book.pageNumber;
        this.coverType = book.coverType;
        this.releaseDate = book.releaseDate;
        this.description = book.description;
        this.amount = book.amount;
    }
    return Book;
}());
exports.Book = Book;
