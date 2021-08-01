import { BookServiceService } from 'src/app/service/bookService/book-service.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/service/userService/user-service.service';
import { isDataSource } from '@angular/cdk/collections';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
 
  
  position: 'before' | 'after' = 'after';
  
  carts: Array<any> = [];
  cart:any;
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

  constructor(private router: Router,private formBuilder: FormBuilder, private bookService: BookServiceService, private userService: UserServiceService){}

  public customerForm! : FormGroup;
  address: any;

  ngOnInit(): void { 
    this.getCartItems(); 

    this.customerForm = this.formBuilder.group({
      fullName: new FormControl(),
      phone: new FormControl(),
      fullAddress: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      addressType: new FormControl(),
    })
     
  }

  token_Id = localStorage.getItem('token');


  getCartItems(){
    this.bookService.getCartItems(this.token_Id).subscribe((data:any)=>{
      this.carts = data.result;

      for (this.cart of this.carts){
        console.log(this.cart.user_id.address);
        for (let add of this.cart.user_id.address){
          console.log(add);
          this.address = {
            "fullName": this.cart.user_id.fullName,
            "phone": this.cart.user_id.phone,
            "addressType": add.addressType,
            "city": add.city,
            "fullAddress": add.fullAddress,
            "state":add.state
          }
          console.log(this.address);
        }
      }

      console.log(this.carts);
      this.bag = this.carts.length;

      this.customerForm.patchValue({
        "fullName":this.address.fullName,
        "phone": this.address.phone,
        "addressType": this.address.addressType,
        "city": this.address.city,
        "fullAddress": this.address.fullAddress,
        "state": this.address.state
      })

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

  submit(){
    console.log(this.customerForm.value);
    let data = {
      "addressType": this.customerForm.value.addressType,
      "fullAddress": this.customerForm.value.fullAddress,
      "city": this.customerForm.value.city,
      "state": this.customerForm.value.state,
    }
    console.log(data);
    this.bookService.customerDetails(data, this.token_Id).subscribe((data:any)=>{
      console.log(data)
    },
    error => {
      console.log(error);
    }
    );
  }
   

  placeOrder(){
    let data: any= {"orders":[]};
    for (this.cart of this.carts){
      let order:any = {
        "product_id": this.cart.product_id._id,
        "product_name": this.cart.product_id.bookName,
        "product_quantity": this.cart.product_id.quantity,
        "product_price": this.cart.product_id.price,
      }
      data['orders'].push(order)
    }  
  
    this.bookService.orderPlace(data,this.token_Id).subscribe((response:any)=>{
      console.log(response)
      this.router.navigate(['/placeorder']);
    })
   }
}

