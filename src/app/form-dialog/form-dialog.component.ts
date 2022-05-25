import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ICategory, IStatus, IBook, IBookForm } from '../type-interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css'],
})
export class FormDialogComponent {
  action: string = 'create';
  initialBookData: IBook = {
    title: null,
    category: null,
    is_active: null,
  };
  categories: Array<ICategory> = [
    { value: 'Technology', viewValue: 'Technology' },
    { value: 'Cartoon', viewValue: 'Cartoon' },
    { value: 'General', viewValue: 'General' },
  ];
  statuses: Array<IStatus> = [
    { value: 0, viewValue: 'Inactive' },
    { value: 1, viewValue: 'Active' },
  ];
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: IBook,
    private bookService: BookService
  ) {
    this.initialBookData = data;
    if (data && data.id) {
      this.action = 'edit';
    }
  }

  handleFormSubmit() {
    if (this.action === 'edit') {
      this.bookService
        .updateBook(this.initialBookData)
        .subscribe((book) =>
          this.dialogRef.close({ event: 'Cancel', data: book })
        );
    } else {
      this.bookService
        .createBook(this.initialBookData)
        .subscribe((book) =>
          this.dialogRef.close({ event: 'Cancel', data: book })
        );
    }
  }
}
