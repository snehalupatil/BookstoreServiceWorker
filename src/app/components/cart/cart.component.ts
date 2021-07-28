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
  
  carts: Array<any> = [];

  data: any;

  constructor(private router: Router, private bookService: BookServiceService){}

  ngOnInit(): void {  
    this.getCartItems();
    
  }

  token_Id = localStorage.getItem('token');

  address(){
    this.displayAddress = false
  }

  getCartItems(){
    this.bookService.getCartItems(this.token_Id).subscribe((data:any)=>{
      this.carts = data['result'];
      console.log(this.carts);

    },(error)=>{
      console.log(error);
    })
  }

  removeCartItem(data:any){
    this.carts.splice(data,1);
    this.bookService.removeCartItem(data,this.token_Id).subscribe((res:any)=>{
      console.log("cart Item removed sucessfully",res);
      this.getCartItems();
      //this.bag=this.cartservice.getCartItems();
      
    })
  }
  
}

