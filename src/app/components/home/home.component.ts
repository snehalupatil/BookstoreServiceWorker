import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/service/bookService/book-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  isAdded = true;
  book: any;
  bag: any;
  b :any;
  p: number = 1;
  cart: any;

  constructor( private bookService: BookServiceService, private router: Router) { }
  books: Array<any> = [];

  

  ngOnInit(): void {
    this.getBooks();
    this.addtoCart(this.cart);
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

    cart.isAdded = false;
    console.log("cart._id:",cart._id)
   
    for (this.b of this.books){
      let a = console.log("a",cart._id)
      let b = console.log("b",this.b._id)
      if (a == b){
        cart.isAdded = true;
      }
    }
    this.bookService.addCart(data, this.token_Id).subscribe((response:any) => {
      console.log(response)

    
    },(error)=>{
      console.log(error);
    })
    
  }


  whishlist(cart: any){
    let wishlistData = {
      "id": cart._id,
      "token": this.token_Id
    }
    this.bookService.addWishlist(wishlistData, this.token_Id).subscribe((response: any)=>{
      console.log(response)
    },
    error => {
      console.log(error);
    });

    this.router.navigate(['/wishlist']);
  }
  
}



    
