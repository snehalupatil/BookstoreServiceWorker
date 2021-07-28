import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Input() cartBooks:any;
  badgeContent: number | undefined;


  constructor( private router: Router ) { }

  ngOnInit(): void {
  }
 

  redirectToCart() {
    this.router.navigate(['/cart']);
  }


  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}


