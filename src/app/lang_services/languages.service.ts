import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

   private endpoint:string;

   constructor(private http: HttpClient, private router:Router) {
      this.endpoint = 'http://localhost:3005/lal/'
   }

   languages() {
      return this.http.get(`${this.endpoint}languages`)
   }
}
