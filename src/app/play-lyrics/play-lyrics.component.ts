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
      })
   }

   ngOnInit(): void {
      if (this.idLyric) {
         this.lyricsService.getLyric(this.idLyric)
         .subscribe(lyric => {
            console.log(lyric);

         })
      }
   }

}
