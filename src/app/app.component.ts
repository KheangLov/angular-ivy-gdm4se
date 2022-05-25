import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { IBook } from './type-interface';
import { BookService } from './book.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  books: Array<IBook> = [];
  constructor(public dialog: MatDialog, private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe((books) => console.log(books));
  }

  openDialog() {
    this.dialog.open(FormDialogComponent);
  }
}
