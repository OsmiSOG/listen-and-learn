import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Lyrics } from "./lyrics";

@Injectable({
  providedIn: 'root'
})
export class LyricsService {

   endpoint:string = 'http://localhost:3005/lal/';

   constructor( private http: HttpClient ) { }

   getAllLyrics() {
      const path = this.endpoint+'lyrics';
      return this.http.get<Lyrics[]>(path)
   }

   getLyric(id) {
      const path = this.endpoint+'lyrics/id/'+id
      return this.http.get<any>(path)
   }

   searchLyric(param:string) {
      const path = this.endpoint+'lyrics/search/'+param
      return this.http.get<any>(path)
   }
}
