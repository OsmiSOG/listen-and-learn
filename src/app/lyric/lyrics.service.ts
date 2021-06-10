import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
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

   createLyrics(data:any) {
      const path = this.endpoint+'lyrics'

      const token:string = localStorage.getItem('auth_token');

      const headers = new HttpHeaders({
         'authorization': token
      });

      let user:any = JSON.parse(localStorage.getItem('user'));
      data.collaboratorId =user.nickname;
      return this.http.post(path, data, {headers})
   }

   playLyrics(idLyric:string, wordsAnswered:Array<string>) {
      const path = this.endpoint+'play/lyrics';

      const data = {
         id: idLyric,
         wordsAnswered
      }

      return this.http.post(path, data);
   }
}
