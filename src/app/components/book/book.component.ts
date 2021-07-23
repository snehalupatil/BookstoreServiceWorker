
import { Input, EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  

  constructor() { }
  books: Array<any> = []; 
  ngOnInit(): void {
  }

  
}
