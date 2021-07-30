import { BookServiceService } from './../../service/bookService/book-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Input() carts:any;
 
  count: Number | undefined;
 
  constructor( private router: Router, private bookService: BookServiceService ) {}
  token_Id = localStorage.getItem('token');

  ngOnInit(): void {
    // this.bookService.getRefreshedData().subscribe((data:any) =>this.getCartItems());
    this.getCartItems();
  }

  getCartItems(){
    this.bookService.getCartItems(this.token_Id).subscribe((data:any)=>{
      this.carts = data.result;
      console.log(this.carts);
      this.count= this.carts.length;

    },(error)=>{
      console.log(error)
    })
  }


 

  redirectToCart() {
    this.router.navigate(['/cart']);
  }


  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}


