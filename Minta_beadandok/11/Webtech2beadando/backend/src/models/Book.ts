export class Book {
    _id: string;
    title: string;
    firstName: string;
    lastName: string;
    publisher: string;
    pageNumber: number;
    coverType: string;
    releaseDate: Date;
    description: string;
    amount: number;
    constructor(book: any) {
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
}