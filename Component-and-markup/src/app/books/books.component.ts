/**
 * Created by TKlas on 24.9.2018 year..
 */
import { Component } from '@angular/core';
import { Book } from './books.component.interfaces';
import { Data } from '../Data';

@Component({
    selector: 'books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css']
})

export class BooksComponent {

    constructor(){}

    books: Book[] = Data;
    selectedBook: Book;

    getActiveBook(book) {
      this.selectedBook = book;
    }
}


