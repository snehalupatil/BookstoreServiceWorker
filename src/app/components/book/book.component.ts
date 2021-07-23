
import { Input, EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book: any;
  @Output() cartId = new EventEmitter();
  isHeaderFocused: boolean = false;

  constructor() { }
  books: Array<any> = []; 
  ngOnInit(): void {
  }

  addToCart(book: any) {
    this.cartId.emit(book.id);
  }
}
