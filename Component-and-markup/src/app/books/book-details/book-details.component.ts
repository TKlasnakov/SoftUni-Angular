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

  showCharacters: number;
  bookDescriptionLength: number;
  fontSize: number;
  bookDescription: string;
  fontClass: string;
  showButtonMore: boolean;
  showButtonLess: boolean;

  constructor() {}

  readMore():void {
    this.showCharacters += BookDetailsConsts.showHideChars;
    this.checkButtonsVisibility();
    this.bookDescription = this.selectedBook.description.substr(0, this.showCharacters);
  }

  readLess():void {
    this.showCharacters -= BookDetailsConsts.showHideChars;
    this.checkButtonsVisibility();
    this.bookDescription = this.selectedBook.description.substr(0, this.showCharacters);
  }

  increaseFontSize():void {
    if(this.fontSize !<  BookDetailsConsts.fontSizes.biggestFontSize) {
      this.fontClass =   'font-' + (this.fontSize += 2)
    }
  }

  decreaseFontSize():void {
    if(this.fontSize !>  BookDetailsConsts.fontSizes.smallestFontSize) {
      this.fontClass = 'font-' + (this.fontSize -= 2)
    }
  }

  checkButtonsVisibility():void {
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
    this.fontSize = BookDetailsConsts.fontSizes.defaultFontSize;
    this.fontClass = 'font-' + this.fontSize;
    this.checkButtonsVisibility();
  }
}
