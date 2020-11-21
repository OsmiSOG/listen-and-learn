import { Component, OnInit } from '@angular/core';
import { LyricsService } from "./../lyric/lyrics.service";


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})

export class IndexComponent implements OnInit {

   lyricsGlobal = []

   constructor(private lyricsService:LyricsService) { }

   ngOnInit(): void {
      this.lyricsService.getAllLyrics()
      .subscribe(lyrics => {
         this.lyricsGlobal = lyrics
         console.log(lyrics);
      })
   }

   searchLyric(searchParam) {
      let search = searchParam.value
      search = encodeURIComponent(search)
      console.log(search);

      this.lyricsService.searchLyric(search)
      .subscribe(found => {
         console.log(found);
         if (!found.lyrics.length) {
            this.ngOnInit()
         }
         this.lyricsGlobal = found.lyrics

      })
      return false;
   }

}
