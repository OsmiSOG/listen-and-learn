import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

   private endpoint:string = 'http://localhost:3005/lal/';

   constructor(
      private http:HttpClient,
      private router:Router
   ) { }

   record(nickname:string, email:string, password:string) {
      const path = this.endpoint + 'register'

      this.http.post(path, {nickname, email, password})
      .subscribe((resp:any) => {
         if (resp.success) {
            this.router.navigate(['/']);
            localStorage.setItem('auth_token',resp.token)
         } else {
            alert('Lo sentimos, ha ocurrido un erro: \n'+resp.message)
         }
      })
   }

   login(email:string, password:string) {
      const path = this.endpoint + 'login'

      this.http.post(path, {email, password})
      .subscribe((resp:any) => {
         if (resp.success) {
            this.router.navigate(['/']);
            localStorage.setItem('auth_token',resp.token)
            localStorage.setItem('user', JSON.stringify(resp.user))
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
