/* Angular modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRouting } from "./app.routing";
/* Custom modules */
import { MoviesModule } from './movies-module/movies.module';
/* Custom components */
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MoviesModule,
    AppRouting
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
