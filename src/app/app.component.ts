import { Component } from '@angular/core';

interface ICategory {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  categories: Array<ICategory> = [
    { value: 'Technology', viewValue: 'Technology' },
    { value: 'Cartoon', viewValue: 'Cartoon' },
    { value: 'General', viewValue: 'General' },
  ];
  statuses = ['Inactive', 'Active'];
}
