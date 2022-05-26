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
  apiUrl: string =
    'https://628da730368687f3e706c47f.mockapi.io/api/angular-mat/books';
  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.apiUrl);
  }

  createBook(book: IBookForm): Observable<IBook> {
    return this.http.post<IBook>(this.apiUrl, book, initialHttpOption);
  }

  updateBook(book: IBook): Observable<IBook> {
    return this.http.put<IBook>(
      `${this.apiUrl}/${book.id}`,
      book,
      initialHttpOption
    );
  }

  deleteBook(book: IBook): Observable<IBook> {
    return this.http.delete<IBook>(`${this.apiUrl}/${book.id}`);
  }
}
