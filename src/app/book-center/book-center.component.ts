import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-center',
  templateUrl: './book-center.component.html',
  styleUrls: ['./book-center.component.css']
})
export class BookCenterComponent implements OnInit {
  books: Array<Book>;
  bookSelected: Book;
  isBookDetail = false;
  isBookUpdate = false;
  isBookCreate = false;

  constructor(private _service: BookService) {
  }

  ngOnInit() {
    this.isBookDetail = false;
    this.isBookUpdate = false;
    this.getListBook();
  }

  getListBook() {
    this._service.getListBook()
      .then(books => this.books = books)
      .catch(err => console.log(err));
  }

  selectBook(book: any) {
    this.updateStatus('detail');
    this.bookSelected = book;
  }

  updateBookSelected(book: any) {
    this.updateStatus('update');
    this.bookSelected = book;
  }

  updateBook(book: any) {
    this._service.updateBook(book)
      .then(res => {
        this.getListBook();
        this.updateStatus('default');
      })
      .catch(err => console.log(err));
  }

  deleteBook(book: any) {
    this._service.deleteBook(book)
      .then(res => {
        this.getListBook();
        this.updateStatus('default');
      })
      .catch(err => console.log(err));
  }

  showCreateBook(book: any) {
    this.updateStatus('create');
  }

  createBook(book: any) {
    this._service.createBook(book)
      .then(res => {
        this.getListBook();
        this.updateStatus('default');
      })
      .catch(err => console.log(err));
  }

  updateStatus(status: String) {
    switch (status) {
      case 'update' :
        this.isBookDetail = false;
        this.isBookUpdate = true;
        this.isBookCreate = false;
        break;
      case 'create' :
        this.isBookDetail = false;
        this.isBookUpdate = false;
        this.isBookCreate = true;
        break;
      case 'detail' :
        this.isBookDetail = true;
        this.isBookUpdate = false;
        this.isBookCreate = false;
        break;
      default :
        this.isBookDetail = false;
        this.isBookUpdate = false;
        this.isBookCreate = false;
        break;
    }
  }
}
