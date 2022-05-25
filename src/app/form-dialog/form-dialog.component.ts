import { Component } from '@angular/core';

import { ICategory, IStatus, IBookForm } from '../type-interface';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css'],
})
export class FormDialogComponent {
  initialBookData: IBookForm = {
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
  constructor() {}
}
