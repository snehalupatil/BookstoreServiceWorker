import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  private search = new BehaviorSubject(String);
  currentMessage = this.search.asObservable();

  changeMessage(bookName: any){
    console.log(bookName);
    this.search.next(bookName)
  }


  private isAdded = new BehaviorSubject([]);
  currentCart = this.isAdded.asObservable();

  changeCart(isAdd: any){
    console.log(isAdd);
    this.isAdded.next(isAdd)
  }


}
