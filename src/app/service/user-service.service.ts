import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private httpService: HttpServiceService ) { }

  url = environment.baseUrl
  
  signupUser = (data: any) => {
    return this.httpService.post(`${this.url}bookstore_user/registration`, data)
  }

  loginUser = (data: any) => {
    return this.httpService.post(`${this.url}bookstore_user/login`, data)
  }
}
