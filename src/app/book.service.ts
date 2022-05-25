import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IBook, IBookForm } from './type-interface';

const initialHttpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(
      'https://628da730368687f3e706c47f.mockapi.io/api/angular-mat/books'
    );
  }

  createBook(book: IBookForm): Observable<IBook> {
    return this.http.post<IBook>(
      'https://628da730368687f3e706c47f.mockapi.io/api/angular-mat/books',
      book,
      initialHttpOption
    );
  }

  updateBook(book: IBook): Observable<IBook> {
    return this.http.put<IBook>(
      `https://628da730368687f3e706c47f.mockapi.io/api/angular-mat/books/${book.id}`,
      book,
      initialHttpOption
    );
  }

  deleteBook(book: IBook): Observable<IBook> {
    return this.http.delete<IBook>(
      `https://628da730368687f3e706c47f.mockapi.io/api/angular-mat/books/${book.id}`
    );
  }
}
