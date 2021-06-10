import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
   form:FormGroup

   constructor(
     private lyricsService:LyricsService,
     private route:ActivatedRoute,
     private fb:FormBuilder
   ) {
      this.route.params
      .subscribe(params => {
         this.idLyric = params.id;

         this.form = this.fb.group({
            wordsAnswered: this.fb.array([])
         });
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
               lyric.lyric.idVideoYoutube = lyric.lyric.youtube_url.substr(32);
               this.lyric = lyric.lyric;
               // this.lyric.phrases = this.lyric.lyric_original_format.map(phrase => phrase.replaceAll("\n", "<br />"));
               this.lyric.phrases = this.lyric.lyric_hidden_keyword_without_format.replaceAll("\n", "<br />");
               let i:number = 0;
               while (this.lyric.phrases.includes('#hidden word#')) {
                  let array = this.form.get('wordsAnswered') as FormArray;
                  array.push(new FormControl(''));

                  console.log(array.controls[i]);

                  this.lyric.phrases = this.lyric.phrases.replace("#hidden word#", `<input type="text" name="wordsAnswered[]" formControlName="${array.controls[i]}">`);
               }

               console.log(this.lyric);
            } else {

            }
         })
      }
   }

   playLyric(e) {
      e.preventDefault();
      console.log(e.target);

      let playForm = new FormData(e.target)

      this.lyricsService.playLyrics(this.idLyric, playForm.getAll('wordsAnswered[]') as Array<string>)
      .subscribe((data:any) => {
         alert(`Tuviste el ${data.score.percentageScore}% de palabras acertadas sobre el 100%
            ${data.score.rightWords.length} palabras hacertadas : ${data.score.rightWords}
            ${data.score.wrongWords.length} palabras herroneas : ${data.score.wrongWords}`)
      });

      return false
   }
}
