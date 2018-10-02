/**
 * Created by TKlas on 24.9.2018 year..
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';

@NgModule({
    imports:[CommonModule],
    declarations: [BooksComponent],
    exports: [BooksComponent]
})

export class BooksModule {}
