import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../services/app.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { Book } from '../models/Book';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css'],
})


export class ListBooksComponent implements OnInit {
  input: number;
  books : Book[];

  displayedColumns: string[] = ['title', 'firstName', 'lastName', 'publisher', 'pageNumber', 'coverType', 'releaseDate', 'description', 'amount'];
  dataSource = new MatTableDataSource(this.books);

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getBooks();
    this.dataSource = new MatTableDataSource(this.books);
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  getBooks() {
    this.appService.listBook().subscribe(books => {
      this.books = books;
      this.dataSource.paginator = this.paginator;
      this.dataSource = new MatTableDataSource(this.books);
    }, () => {
      alert("Error occurred during the listing.");
    }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteBook(book: Book) {
    this.appService.deleteBook(book).subscribe(() => {
      alert(book.title + ' has been successfully deleted.');
      this.getBooks();
    }, () => {
      alert("Error occurred during delete.");
      this.getBooks();
    }
    );
  }

  updateBook(book: Book, value: number) {
    book.amount = book.amount + value;
    if(book.amount <= 0) book.amount = 1;

    this.appService.updateBook(book).subscribe(() => {
      alert("The amount has been successfully submitted.");
      this.getBooks();

    }, () => {
      alert("Error occurred during submit.");
      this.getBooks();
    }
    );
  }
}
