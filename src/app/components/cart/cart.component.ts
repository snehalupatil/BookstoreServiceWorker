import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
 
  
  displayAddress = true;
  displaySummary = true;
  
  data: any;

  constructor(private router: Router){
    this.data = this.router.getCurrentNavigation()?.extras.state;
    (this.data)
  }

  ngOnInit(): void {
    this.getData()
  }

  getData = () =>{
    this.data = this.data['details']
  }

  toggleShowAddress(){
    this.displayAddress = false
     this.displaySummary = false
  }

  toggleShowSummary(){
    this.displaySummary = false
  }
  
}

