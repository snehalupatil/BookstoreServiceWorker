import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/service/user-service.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

hide = true;
  constructor( private service: UserServiceService ) { }
  
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form); 
    if (this.form.valid) {
      let data = {
        "email": this.form.controls.email.value,
        "password": this.form.controls.password.value
      }
      
      this.service.loginUser(data).subscribe((data: any) => {
        console.log(data);

        localStorage.setItem("fullName", data["fullName"]);
        localStorage.setItem("email", data["email"]);
        localStorage.setItem("token", data["id"]);
      });
    }
  }

  ngOnInit(): void {
  }
}


