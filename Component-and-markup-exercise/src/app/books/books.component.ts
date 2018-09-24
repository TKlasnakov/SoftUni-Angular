/**
 * Created by TKlas on 24.9.2018 year..
 */
import { Component } from '@angular/core';
import { Book } from './books.component.interfaces';
import { Data } from '../Data';

@Component({
    selector: 'books',
    templateUrl: 'src/app/books/books.component.html',
    styleUrls: ['src/app/books/books.component.css']
})

export class BooksComponent {

    constructor(){}

    books:Book[] = Data

}


