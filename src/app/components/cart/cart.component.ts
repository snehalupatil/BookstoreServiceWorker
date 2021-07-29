import { BookServiceService } from 'src/app/service/bookService/book-service.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
 
  
  position: 'before' | 'after' = 'after';
  
  carts: Array<any> = [];
  bag:any;
  
  data: any;

  step = true;
  step1 = false;
  step2 = false;

  // num:any=1;
  // step = 0;
  // setStep(index: number) {
  //   this.step = index;
  // }
  // nextStep() {
  //   this.step++;
  // }

  div1:boolean= true
  div2:boolean=true

  setStep(index: number) {
    this.step = true;
  }

  setStep1(index: number) {
    this.step1 = true;
    this.div1 = false;
  }

  setStep2(index: number) {
    this.step2 = true;
    this.div1 = false;
    this.div2 = false;
  }

  constructor(private router: Router, private bookService: BookServiceService){}

  ngOnInit(): void {  
    this.getCartItems();  
  }

  token_Id = localStorage.getItem('token');

  getCartItems(){
    this.bookService.getCartItems(this.token_Id).subscribe((data:any)=>{
      this.carts = data.result;
      console.log(this.carts);
      this.bag = this.carts.length;
    },(error)=>{
      console.log(error)
    })
  }

  removeCartItem(data:any){
    this.carts.splice(data,1);
    this.bookService.removeCartItem(data,this.token_Id).subscribe((responce:any)=>{
      console.log("Cart Item removed sucessfully",responce);
      this.getCartItems();
    })
  }

  placeOrder(){
    this.router.navigate(['/placeorder']);
  }
  
}

