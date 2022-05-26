import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ICategory, IStatus, IBook } from '../type-interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css'],
})
export class FormDialogComponent {
  action: string = 'create';
  displayedColumns = ['Title', 'Category', 'Status'];
  bookFormData = this.bookFormBuilder.group({
    id: [''],
    title: ['', [Validators.required]],
    category: ['', [Validators.required]],
    is_active: ['', [Validators.required]],
  });
  multiFormData = this.multiFormBuilder.group({
    books: new FormArray([
      this.bookFormBuilder.group({
        id: [''],
        title: ['', [Validators.required]],
        category: ['', [Validators.required]],
        is_active: ['', [Validators.required]],
      }),
    ]),
  });
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
    private snackBar: MatSnackBar,
    public bookFormBuilder: FormBuilder,
    public multiFormBuilder: FormBuilder,
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data,
    private bookService: BookService
  ) {
    this.bookFormData.patchValue({
      id: data.id,
      title: data.title,
      category: data.category,
      is_active: data.is_active,
    });
    if (data && data.id) {
      this.action = 'edit';
    }
    if (data && data.action === 'multi-create') {
      this.action = data.action;
    }
  }

  get getBookFormData() {
    return this.bookFormData.controls;
  }

  get getMultiFormControl() {
    return this.multiFormData.controls;
  }

  get getBookFormArray() {
    return this.getMultiFormControl.books as FormArray;
  }

  handleFormSubmit() {
    if (!this.bookFormData.valid) {
      this.snackBar.open('Please fillout all the inputs required!', 'Close', {
        duration: 3000,
      });
      return false;
    }

    const actionFunction = this.action === 'edit' ? 'updateBook' : 'createBook';
    this.bookService[actionFunction](this.bookFormData.value).subscribe(
      (book) =>
        this.dialogRef.close({
          event: 'Cancel',
          data: book,
          action: this.action,
        })
    );
  }
}
