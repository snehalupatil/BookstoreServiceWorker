import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.scss']
})
export class PlaceorderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  continueshopping(){
    this.router.navigate(['/dashboard']);
  }
}
