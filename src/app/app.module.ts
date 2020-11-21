import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { LyricsService } from "./lyric/lyrics.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IndexComponent } from './index/index.component';
import { NewLyricsComponent } from './new-lyrics/new-lyrics.component';
import { PlayLyricsComponent } from './play-lyrics/play-lyrics.component';
import { YouTubePlayerModule } from "@angular/youtube-player";

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      RegisterComponent,
      IndexComponent,
      NewLyricsComponent,
      PlayLyricsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule,
      YouTubePlayerModule
   ],
   providers: [
      LyricsService
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }
