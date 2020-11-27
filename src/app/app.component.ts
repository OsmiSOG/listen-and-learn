import { Component } from '@angular/core';
import { User } from './user/user';
import { UserService } from "./user/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
   title = 'listen-and-learn';

   constructor(public userService:UserService) {}

   logout(){
      this.userService.logout()
   }
}
