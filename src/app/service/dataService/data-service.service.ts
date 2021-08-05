import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  // private search = new BehaviorSubject(String);
  // currentsearch = this.search.asObservable();

 

  // changeSearch(bookName: any){
  //   console.log(bookName);
  //   this.search.next(bookName)
  // }


// public editDataDetails: any = [];
// public subject = new Subject<any>();
// private messageSource = new  BehaviorSubject(this.editDataDetails);

// currentMessage = this.messageSource.asObservable();

// changeMessage(message: string) {
// this.messageSource.next(message)
// }

currentMessage  = new Subject<any>();

changeMessage(data: any) {
    this.currentMessage.next(data);
  }

}
