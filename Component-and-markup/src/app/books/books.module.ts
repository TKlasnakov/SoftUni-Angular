/**
 * Created by TKlas on 24.9.2018 year..
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
    imports:[CommonModule],
    declarations: [BooksComponent, BookDetailsComponent],
    exports: [BooksComponent]
})

export class BooksModule {}
