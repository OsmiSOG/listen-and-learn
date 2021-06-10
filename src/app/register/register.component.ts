import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

import { UserService } from "../user/user.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

   form:FormGroup

   constructor(
      private userService:UserService,
      private fb:FormBuilder
   ) { }

   ngOnInit(): void {
      this.form = this.fb.group({
         nickname: ['', Validators.required],
         email: ['',Validators.required, Validators.email],
         password: ['',Validators.required]
     });
   }

   register() {
      const values = this.form.value
      this.userService.record(values.nickname, values.email, values.password)
      return false
   }
}
