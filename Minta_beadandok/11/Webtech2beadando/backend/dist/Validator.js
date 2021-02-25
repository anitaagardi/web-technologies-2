"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Error_1 = require("./models/Error");
var Validator = /** @class */ (function () {
    function Validator() {
    }
    Validator.booksPostError = function (book) {
        var errors = [];
        console.log(book);
        if (!book) {
            errors.push(new Error_1.Error("book", "You must fill the form!"));
            return errors;
        }
        if (!book.title) {
            errors.push(new Error_1.Error("book.title", "Title is required!"));
        }
        if (!book.firstName) {
            errors.push(new Error_1.Error("book.firstName", "First name is required!"));
        }
        if (!book.lastName) {
            errors.push(new Error_1.Error("book.lastName", "Last name is required!"));
        }
        if (!book.publisher) {
            errors.push(new Error_1.Error("book.publisher", "Publisher is required!"));
        }
        if (!book.pageNumber) {
            errors.push(new Error_1.Error("book.pageNumber", "Page number is required!"));
        }
        if (!book.coverType) {
            errors.push(new Error_1.Error("book.coverType", "Cover type is required!"));
        }
        if (!book.releaseDate) {
            errors.push(new Error_1.Error("book.releaseDate", "Release date is required!"));
        }
        if (!book.description) {
            errors.push(new Error_1.Error("book.description", "Description is required!"));
        }
        if (!book.amount) {
            errors.push(new Error_1.Error("book.amount", "Amount is required!"));
        }
        return errors;
    };
    return Validator;
}());
exports.Validator = Validator;
