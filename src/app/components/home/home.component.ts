import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/service/bookService/book-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  displayShow = true;
  book: any;
  bag: any;

  p: number = 1;

  constructor( private bookService: BookServiceService, private router: Router) { }
  books: Array<any> = [];

  

  ngOnInit(): void {
    this.getBooks();
  }

  token_Id = localStorage.getItem('token');

  getBooks(){
    this.bookService.getAllBooks().subscribe((data:any) => {
      console.log(data);
      this.books = data['result']
      console.log("Book Array", this.books);
    })
  }

  bookDetails(book:any){
      this.book = book
      this.router.navigate(['/book'], { state : { details: book }})
  }

  addtoCart(cart: any){
    console.log(cart)
    let data = {
    "id": cart._id,
    "token": this.token_Id
    }
    this.bookService.addCart(data, this.token_Id).subscribe((response:any) => {
      console.log(response)

    },(error)=>{
      console.log(error);
    })
    this.displayShow = false
  }

  
}



    
