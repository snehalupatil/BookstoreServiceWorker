import { BookServiceService } from 'src/app/service/bookService/book-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
 
  
  displayAddress = true;
  
  labelPosition: 'before' | 'after' = 'after';
  
  cartBooks: Array<any> = [];

  data: any;

  constructor(private router: Router, private bookService: BookServiceService){}

  ngOnInit(): void {  
    this.getCarts();
  }

  token_Id = localStorage.getItem('token');

  address(){
    this.displayAddress = false
  }

  getCarts(){
    this.bookService.getCartItems(this.token_Id).subscribe((data:any)=>{
      this.cartBooks = data['result'];
      console.log(this.cartBooks);

    },(error)=>{
      console.log(error);
    })
  }
  
}

