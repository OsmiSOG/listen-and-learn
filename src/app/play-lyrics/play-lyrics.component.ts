import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { LyricsService } from "../lyric/lyrics.service";


@Component({
  selector: 'app-play-lyrics',
  templateUrl: './play-lyrics.component.html',
  styleUrls: ['./play-lyrics.component.sass']
})
export class PlayLyricsComponent implements OnInit {

   idLyric:string
   lyric:any

   constructor(
     private lyricsService:LyricsService,
     private route:ActivatedRoute
   ) {
      this.route.params
      .subscribe(params => {
         this.idLyric = params.id
         // pantalla = window.screen.width
      })
   }

   ngOnInit(): void {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);

      if (this.idLyric) {
         this.lyricsService.getLyric(this.idLyric)
         .subscribe(lyric => {
            if (lyric.success) {
               lyric.lyric.idVideoYoutube = lyric.lyric.YoutubeURL.substr(32);
               this.lyric = lyric.lyric
               console.log(lyric);
               this.lyric.phrases = this.lyric.splitLyricExcludingHiddenWords.map(phrase => phrase.replaceAll("\n", "<br />"));
            } else {

            }
         })
      }
   }

   playLyric(form) {
      console.log(form);

      return false
   }
}
