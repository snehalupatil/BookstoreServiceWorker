import { HttpServiceService } from './../httpService/http-service.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  
  private refresh = new Subject<void>();

  getRefreshedData(){
    return this.refresh;
  }

  constructor( private httpService: HttpServiceService ) { }

  url = environment.baseUrl

  getAllBooks=()=> {
    return this.httpService.get(`${this.url}bookstore_user/get/book`)
  }

  addCart=(data:any, token:any)=>{
    // return this.httpService.post(`${this.url}bookstore_user/add_cart_item/{product_id}`,data, true)
    console.log(data);
    return this.httpService.post(`${this.url}bookstore_user/add_cart_item/${data.id}`, { }, true,token)
  }
  
  getCartItems(token:any){
    console.log(token)
    return this.httpService.get(`${this.url}bookstore_user/get_cart_items`, true, token);
  }

  removeCartItem(data:any, token:any){
    console.log("data in remove item",data._id);
    return this.httpService.delete(`${this.url}bookstore_user/remove_cart_item/${data._id}`, { }, true, token)
  }
}


