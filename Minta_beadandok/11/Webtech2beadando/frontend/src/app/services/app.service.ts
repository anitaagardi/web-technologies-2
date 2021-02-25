import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Book } from '../models/Book';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
  books: Book[] = [];
  baseURL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.baseURL + '/books', book);
}
updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(this.baseURL + '/books', book);
}
deleteBook(book: Book): Observable<Book> {
    return this.http.delete<Book>(this.baseURL + '/books/' + book._id);
}
listBook(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseURL + '/books');
}

}
