import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Book} from './book';

@Injectable()
export class BookService {
  private _getUrl = '/api/books';
  private _postUrl = '/api/books';
  private _putUrl = '/api/books/';
  private _deleteUrl = '/api/books/';

  constructor(private _http: Http) {
  }

  getListBook() {
    return this._http.get(this._getUrl)
      .map(res => res.json())
      .toPromise();
  }

  createBook(book: Book) {
    return this._http.post(this._postUrl, book)
      .map(res => res.json())
      .toPromise();
  }

  updateBook(book: Book) {
    return this._http.put(this._putUrl + book._id, book)
      .map(res => res.json())
      .toPromise();
  }

  deleteBook(book: Book) {
    return this._http.delete(this._deleteUrl + book._id, book)
      .map(res => res.json())
      .toPromise();
  }
}
