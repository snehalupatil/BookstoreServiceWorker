import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/service/bookService/book-service.service';
import { DataServiceService } from 'src/app/service/dataService/data-service.service';

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
  bookName:any;
  sort:String="Sort By";
  value:any;
  // cityN:boolean= false;

  constructor( private dataService: DataServiceService, private bookService: BookServiceService, private router: Router) { }
  books: Array<any> = [];
  carts: Array<any> = [];
  totalItems: any = 0;

  ngOnInit(): void {
    this.getBooks();
    this.addtoCart(this.cart);
    // this.bookService.getRefreshedData().subscribe(() => this.addtoCart(this.cart));
    // this.dataService.currentsearch.subscribe((res:any)=>{
    //   console.log(res)
    //   this.bookName=res
    // }
    //   );
    this.dataService.currentMessage.subscribe((res:any) => {
      console.log(res);
    })
  }


  token_Id = localStorage.getItem('token');

  getBooks(){
    this.bookService.getAllBooks().subscribe((data:any) => {
      console.log(data);
      this.books = data['result']
      console.log("Book Array", this.books);
      this.totalItems = this.books.length;
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
    // this.bookService.getRefreshedData().subscribe(() => this.addtoCart(this.cart));
    this.bookService.addCart(data, this.token_Id).subscribe((response:any) => {
      console.log(response);
      cart.isAdded = true;
    
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


  sortBy(value: String){
    if (value == "ASC") {
      console.log("Hi")
      this.sort="Price(Low-High)";
      this.books.sort((a, b) => a.price - b.price);
      console.log(this.books)
    } else if (value == "DSC") {
      this.sort="Price(High-Low)";
      this.books.sort((a, b) => b.price - a.price);
    }
   
    else {
      console.log("Not available");
    }
  }
  
}



    
