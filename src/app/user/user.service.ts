import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

   endpoint:string = 'http://localhost:3005/lal/';

   constructor(
      private http:HttpClient,
      private router:Router
   ) { }

   login(email:string, password:string) {
      const path = this.endpoint + 'login'
      console.log(path);

      this.http.post(path, {email:email, password:password})
      .subscribe((resp:any) => {
         if (resp.success) {
            this.router.navigate(['/']);
            localStorage.setItem('auth_token',resp.token)
         } else {
            alert('Error en las credenciales')
         }

      })
   }

   logout() {
      localStorage.removeItem('auth_token')
   }

   public get logIn(): boolean {
      return (localStorage.getItem('auth_token') !== null);
   }
}
