import { BookServiceService } from './../../service/bookService/book-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  data: any;
  bag:any;
  
  booksArray: Array<any> = [];
  rating5:Number=5;
  rating4:Number=4;
  rating3:Number=3;
  rating2:Number=2;
  rating1:Number=1;
  book: any;

  constructor( private router: Router) { 
    this.data = this.router.getCurrentNavigation()?.extras.state;
    (this.data)
  }

  bookDetails(book:any){
    this.book = book
    this.router.navigate(['/cart'], { state : { details: book }})
}
 

  ngOnInit(): void {
    this.getData()
  }
  

  getData = () =>{
    this.data = this.data['details']
  }

  addcart(){
    this.book.addedToCart=false;
    for(let b of this.data){
      if(this.book.product_id==b.product_id){
        this.book.addedToCart=true;
      }
    }
   
  }
 
  }