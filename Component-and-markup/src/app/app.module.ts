import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BooksModule } from './books/books.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    BooksModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule {

}
