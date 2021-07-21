import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  hide = true;
  constructor( private service: UserServiceService ) { }

  form = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(1)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    number: new FormControl('', [Validators.required, Validators.minLength(10)])
  })


  submit() {
    console.log(this.form.valid); 
      if (this.form.valid) {
        let data = {
          "fullName": this.form.controls.fullName.value,
          "email": this.form.controls.email.value,
          "password": this.form.controls.password.value,
          "phone": this.form.controls.number.value
        }
        this.service.signupUser(data).subscribe((data: any) => {
          console.log(data)
        })
      }
  }
  
  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
  }


}
