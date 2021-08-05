import { BookServiceService } from './../../service/bookService/book-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/service/dataService/data-service.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Input() carts:any;
  books: Array<any> = [];
  count: Number | undefined;
  searchedResult :[] | undefined;
  bookName: any;
 
  constructor( private dataService: DataServiceService, private router: Router, private bookService: BookServiceService ) {}
  token_Id = localStorage.getItem('token');

  ngOnInit(): void {
    this.getCartItems();
    // this.bookService.getRefreshedData().subscribe((data:any) =>this.getCartItems());
    
  }

  getCartItems(){
    this.bookService.getCartItems(this.token_Id).subscribe((data:any)=>{
      this.carts = data.result;
      // console.log(this.carts);
      this.count= this.carts.length;
      this.dataService.changeMessage(this.carts)

    },(error)=>{
      console.log(error)
    })
  }

  setSearch=(event:any) : void =>{
    this.bookName=event.target.value
    console.log(this.bookName)
    this.dataService.changeMessage(this.bookName)
  }

  redirectToCart() {
    this.router.navigate(['/cart']);
  }

  getWishlist(){
    this.router.navigate(['/wishlist']);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  

  
}


