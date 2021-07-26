import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  data: any;
  // starRating = 0;

  rating5:Number=5;
  rating4:Number=4;
  rating3:Number=3;
  rating2:Number=2;
  rating1:Number=1;

  constructor( private router: Router ) { 
    this.data = this.router.getCurrentNavigation()?.extras.state;
    (this.data)
  }

 

  ngOnInit(): void {
    this.getData()
  }

  getData = () =>{
    this.data = this.data['details']
  }
 
  }