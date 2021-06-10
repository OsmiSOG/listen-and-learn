import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LanguagesService } from '../lang_services/languages.service';

import { LyricsService } from "../lyric/lyrics.service";

@Component({
  selector: 'app-new-lyrics',
  templateUrl: './new-lyrics.component.html',
  styleUrls: ['./new-lyrics.component.sass']
})
export class NewLyricsComponent implements OnInit {

   idYoutbe:string = '';
   form:FormGroup;
   languages:any;

   constructor(
      private lyricsService:LyricsService,
      private languageService:LanguagesService,
      private fb:FormBuilder,
      private router:Router
   ) {
      this.form = this.fb.group({
         videoName: ['', [Validators.required]],
         youtubeURL: ['', [Validators.required]],
         type: ['', [Validators.required]],
         language: ['', [Validators.required]],
         lyric: ['', [Validators.required]],
         keywords: ['', [Validators.required]]
      })

   }

   ngOnInit(): void {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      //\{{2}(.*?)\}{2}/gm
      this.languages = this.languageService.languages()
      .subscribe((resp:any) => {
         if (resp.success) {
            this.languages = resp.languages;
         } else {
            alert('Ha ocurrido un problema al obtener los idiomas');
         }
      });
   }

   loadVideo() {
      let youtubeURL = this.form.value.youtubeURL
      this.idYoutbe = youtubeURL.substr(32);
   }

   onSubmit(e) {
      e.preventDefault();

      let data:any = this.form.value
      data.keywords = data.keywords.split(',').map(word => word.trim());
      this.lyricsService.createLyrics(data)
      .subscribe((res:any) => {
         if (res.success) {
            this.router.navigate(['play/lyrics/:id', {id: res.lyric._id}])
            alert('Se ha creado el nuevo Lyric')
         } else {
            alert('Ha ocurrido un problema al crear la canción')
         }
      })

   }

}
