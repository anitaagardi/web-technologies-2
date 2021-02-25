import * as express from "express";
import * as cors from "cors";

import { Book } from "./models/Book";
import { Error } from './models/Error';
import { Validator } from "./Validator";
import { insertBook, listBook, updateBook, deleteBook, createBook } from "./Services/BookService";
import { createDB } from "./services/DBService";

export const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.options('*', cors());

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    next();
});

app.post('/books', async function (req, res) {
    const book: Book = new Book(req.body);
    let errors: Error[] = [];

    errors.push.apply(errors, Validator.booksPostError(book));
    console.log(errors);
    if (errors.length > 0) {
        console.log(errors);
        return res.status(500).send(errors);
    }
    try { await insertBook(book); }
    catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
    return res.status(200).send();
});

app.get('/books', async function (req, res) {
    let books: Book[] = [];
    try { books = await listBook(); } 
    catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
    return res.status(200).send(books);
});

app.put('/books', async function (req, res) {
    const book: Book = new Book(req.body);
    let errors: Error[] = [];
    errors.push.apply(errors, Validator.booksPostError(book));
    if (errors.length > 0) {
        console.log(errors);
        return res.status(500).send(errors);
    }
    try { await updateBook(book); }
    catch (e) { return res.status(500).send(e); }
    return res.status(200).send();
});

app.delete('/books/:bookId', async function (req, res) {
    const bookId = req.params.bookId;
    try { await deleteBook(bookId); } 
    catch (e) { return res.status(500).send(e); }
    return res.status(200).send();
});