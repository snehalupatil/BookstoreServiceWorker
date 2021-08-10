import { Router } from '@angular/router';
import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { BookServiceService } from 'src/app/service/bookService/book-service.service';
import { DataServiceService } from 'src/app/service/dataService/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  searchBookName = '';
  isAdded = true;
  book: any;
  bag: any;
  b :any;
  p: number = 1;
  cart: any;
  bookName:any;
  sort:String="Sort By";
  value:any;
  

  constructor( private dataService: DataServiceService, private bookService: BookServiceService, private router: Router) { }
  books: Array<any> = [];
  carts: Array<any> = [];
  totalItems: any = 0;
  // isCartAddedArray=[];


  // ngOnChanges(changes: any) {
  //   console.log("isAdded")
  //   this.dataService.currentCart.subscribe((res1:any) => {
  //     console.log(res1);
  //     this.isCartAddedArray= res1;
  //   })

  //   if (changes.myFirstInputParameter && changes.myFirstInputParameter.currentValue) {
  //     this.isAddedFilter();
  //     // this.doSomething(this.myFirstInputParameter)
  //   }

  //   if (changes['isCartAddedArray']) {
  //     console.log("onchanges calling",changes)
  //     this.isCartAddedArray = changes['isCartAddedArray'].currentValue;
  //   }
  // }


  ngOnInit(): void {
   
    this.getBooks();

    // this.bookService.getRefreshedData().subscribe(() => this.addtoCart(this.cart));

    this.dataService.currentMessage.subscribe((res2:any) => {
      console.log(res2);
      this.searchBookName = res2;
    })
    
    // this.dataService.currentCart.subscribe((res1:any) => {
    //   console.log(res1);
    //   this.isCartAddedArray= res1;
    // })

    // this.isAddedFilter()


    // this.addtoCart(this.cart);
    
  }

  token_Id = localStorage.getItem('token');

  // isAddedFilter(){
  //   this.dataService.currentCart.subscribe((res1:any) => {
  //     console.log(res1);
  //     this.isCartAddedArray= res1;
  //     this.filter();
  //   })
  //   console.log("isAdded",this.isCartAddedArray)
  // }

  // filter(){
  //   console.log("iscartArray",this.isCartAddedArray)
  //   for ( let a=0; a< this.isCartAddedArray.length; a++ ){

  //     // console.log("a",this.isCartAddedArray[a])
  //     for ( let b of this.books ){
  //       // console.log("a",a._id)
  //       console.log("b",b._id)
  //     }
  //   }
  // }

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


  sortBy = (e:any) => {

    console.log(e.target.value)
    
    if (e.target.value === "ASC") {
      // console.log(value)
      // this.sort="Price(Low-High)";
      this.books.sort((a, b) => a.price - b.price);
      console.log(this.books)
    } else if (e.target.value === "DSC") {
      // this.sort="Price(High-Low)";
      this.books.sort((a, b) => b.price - a.price);
    }else if (e.target.value === "REV") {
      // this.sort="Price(High-Low)";
      this.books.reverse();
    }
   
    else {
      console.log("Invalid");
    }
  }
  
}



    
