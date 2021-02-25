import { AppService } from './../services/app.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Book } from '../models/Book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  book: Book = new Book();

  bookForm = this.fb.group({
    title: [null, Validators.required],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    publisher: [null, Validators.required],
    pageNumber: [null, Validators.required],
    coverType: [null, Validators.required],
    releaseDate: [null, Validators.required],
    description: [null, Validators.required],
    amount: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private appService: AppService) {}

  onSubmit() {
    this.appService.addBook(this.book).subscribe(
      () => {
        this.book = new Book();
      }, (error) => {
        alert('Error');
      }
    );
    
    this.bookForm.reset();
    alert('Book has been submitted!');
  }
}