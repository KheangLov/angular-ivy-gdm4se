import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';

import { ICategory, IStatus, IBook } from '../type-interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css'],
})
export class FormDialogComponent {
  action: string = 'create';
  bookFormData = this.bookFormBuilder.group({
    title: ['', [Validators.required]],
    category: ['', [Validators.required]],
    is_active: ['', [Validators.required]],
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
    public bookFormBuilder: FormBuilder,
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: IBook,
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
  }

  handleFormSubmit() {
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
