import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';

import { FormDialogComponent } from '../form-dialog/form-dialog.component';
import { BookService } from '../book.service';
import { IBook } from '../type-interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  bookData: IBook;
  bookList: Array<IBook> = [];
  constructor(private bookService: BookService, public dialog: MatDialog) {}

  ngOnInit() {
    this.bookService
      .getBooks()
      .subscribe(
        (books) => (this.bookList = books.filter((book) => book.is_active))
      );
  }

  openDialog(data = {}) {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data,
    });
    dialogRef
      .afterClosed()
      .subscribe(({ data }) => data && this.bookList.push(data));
  }

  handleBookDelete(book: IBook) {
    this.bookService
      .deleteBook(book)
      .subscribe(
        (book) =>
          (this.bookList = this.bookList.filter((data) => data.id !== book.id))
      );
  }

  handleBookView(book: IBook) {
    this.bookData = book;
  }

  clearData() {
    this.bookData = {
      id: null,
      title: null,
      category: null,
      createdAt: null,
      is_active: null,
    };
  }
}
