import { BookServiceService } from './../../service/bookService/book-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  wishlistBook: Array<any> =[];
  constructor( private bookService: BookServiceService ) { }

  ngOnInit(): void {
  }

  token_Id = localStorage.getItem('token');

  getwishlist(){
    this.bookService.getWishlist(this.token_Id).subscribe((data:any)=>{
      this.wishlistBook=data['result']
      console.log(this.wishlistBook)
    })
  }

  removeItem=(data: any)=>{
    console.log(data.product_id._id)
    this.bookService.deleteWishlist(data.product_id._id, this.token_Id).subscribe((response:any)=>{
      console.log(response);
      
      this.getwishlist()
    },
    error => {
      console.log(error);
    });
  }

}
