import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/service/bookService/book-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalItems: any = 0;

  constructor( private bookService: BookServiceService ) { }
  books= []
  sort:String="Sort By";

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks(){
    this.bookService.getAllBooks().subscribe((data:any) => {
      console.log(data);
      this.books = data['result']
      this.totalItems = this.books.length;
      
    })
  }


  sortBy = ( sortByIn:string ) => {
    if (sortByIn == "p") {
      this.sort="Price(Low-High)";
      this.books.sort((a: any, b: any) => (a.price) - (b.price));
    } else if (sortByIn == "phl") {
      this.sort="Price(High-Low)";
      this.books.sort((a: any, b: any) => (b.price) - (a.price));
    }
   
    else {
      console.log("Not available");
    }
  }
}