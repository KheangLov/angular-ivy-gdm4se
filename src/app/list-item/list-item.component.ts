import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { IBook } from '../type-interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  listBooks = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe((books) => (this.listBooks = books));
  }
}
