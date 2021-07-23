import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/service/bookService/book-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  book: any;

  constructor( private bookService: BookServiceService, private router: Router) { }
  books: Array<any> = [];

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.bookService.getAllBooks().subscribe((data:any) => {
      console.log(data);
      this.books = data['result']
      console.log("Book Array", this.books);
    })
  }

  bookDetails(book:any){
      this.book = book
      this.router.navigate(['/book'])
  }

}
