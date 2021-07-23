import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BookComponent } from './components/book/book.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    children:[
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent }
    ]
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'book', component: BookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
