import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserService } from "../user/user.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

   form: FormGroup

   constructor(
      private userService: UserService,
      private fb:FormBuilder,
   ) { }

   ngOnInit(): void {
      this.form = this.fb.group({
         email: ['',Validators.required],
         password: ['',Validators.required]
     });
   }

   login() {
      const val = this.form.value
      this.userService.login(val.email, val.password)
      return false
   }

}
