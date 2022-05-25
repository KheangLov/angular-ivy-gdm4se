import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { FormDialogComponent } from '../form-dialog/form-dialog.component';
import { BookService } from '../book.service';
import { IBook } from '../type-interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  listBooks: Array<IBook> = [];
  constructor(private bookService: BookService, public dialog: MatDialog) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe((books) => (this.listBooks = books));
  }

  openDialog() {
    const dialogRef = this.dialog.open(FormDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
