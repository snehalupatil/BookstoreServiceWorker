import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserServiceService } from '../userService/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements CanActivate {

  constructor( private userService: UserServiceService, private router: Router ) { }

  canActivate():boolean{
    if (this.userService.loggedIn()){
      return true;
    }else{
      this.router.navigate(['/login']);
    return false;   
    }
  }
}
