import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  @Input() book;
  @Output() onUpdateBook = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  updateBook() {
    this.onUpdateBook.emit(this.book);
  }

}
