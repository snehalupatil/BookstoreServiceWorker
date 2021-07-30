import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BookComponent } from './components/book/book.component';
import { CartComponent } from './components/cart/cart.component';
import { PlaceorderComponent } from './components/placeorder/placeorder.component';
import { AuthServiceService } from './service/authService/auth-service.service';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    children:[
      { path: 'login', component: SigninComponent, canActivate:[ AuthServiceService ] },
      { path: 'signup', component: SignupComponent }
    ]
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'book', component: BookComponent },
  { path: 'cart', component:CartComponent },
  { path: 'placeorder', component:PlaceorderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
