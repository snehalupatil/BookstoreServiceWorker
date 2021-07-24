
import { Input, EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/service/bookService/book-service.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  

  constructor( private bookService: BookServiceService ) { }
  book: any
  ngOnInit(): void {
  }

  

  getCartItems(){

  }
  
  review() {
    return Math.floor(Math.random() * (5 - 1) + 1)
  }
  
  }