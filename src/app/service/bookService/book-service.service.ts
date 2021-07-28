import { HttpServiceService } from './../httpService/http-service.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

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
  
}


