import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {
  book: Book = new Book();

  @Output() onCreateBook = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  createBook() {
    this.onCreateBook.emit(this.book);
  }

}
