import {Component, Input, OnInit, OnChanges} from '@angular/core';
import { Book } from '../books.component.interfaces';
import { BookDetailsConsts } from './book-details.component.constants';

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})

export class BookDetailsComponent implements OnChanges{

  @Input() selectedBook: Book;

  constructor() {}

  private showCharacters: number;
  private bookDescriptionLength: number;
  protected bookDescription: string;
  protected showButtonMore: boolean;
  protected showButtonLess: boolean;

  readMore(): void {
    this.showCharacters += BookDetailsConsts.showHideChars;
    this.checkButtonsVisibility();
    this.bookDescription = this.selectedBook.description.substr(0, this.showCharacters);
  }

  readLess(): void{
    this.showCharacters -= BookDetailsConsts.showHideChars;
    this.checkButtonsVisibility();
    this.bookDescription = this.selectedBook.description.substr(0, this.showCharacters);
  }

  checkButtonsVisibility(): void {
    if(this.showCharacters >= this.bookDescriptionLength) {
      this.showCharacters = this.bookDescriptionLength;
    }

    if(this.showCharacters <= BookDetailsConsts.showHideChars) {
      this.showCharacters = this.showCharacters = BookDetailsConsts.showHideChars;
    }

    this.showButtonLess = this.showCharacters > BookDetailsConsts.showHideChars;
    this.showButtonMore = this.showCharacters < this.bookDescriptionLength;
  }


  ngOnChanges() {
    this.showCharacters = BookDetailsConsts.showHideChars;
    this.bookDescriptionLength = this.selectedBook.description.length;
    this.bookDescription = this.selectedBook.description.substr(0, this.showCharacters);
    this.checkButtonsVisibility();
  }
}
