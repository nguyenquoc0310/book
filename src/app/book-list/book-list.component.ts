import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input() books;
  @Output() onSelectBook = new EventEmitter();
  @Output() onUpdateBookSelected = new EventEmitter();
  @Output() onDeleteBook = new EventEmitter();
  @Output() onShowCreateBook = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  selectBook(book: Book) {
    this.onSelectBook.emit(book);
  }

  updateBookSelected(book: Book) {
    this.onUpdateBookSelected.emit(book);
  }

  deleteBook(book: Book) {
    this.onDeleteBook.emit(book);
  }

  showCreateBook() {
    this.onShowCreateBook.emit();
  }

}
