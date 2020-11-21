import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from "./index/index.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { NewLyricsComponent } from "./new-lyrics/new-lyrics.component";
import { PlayLyricsComponent } from "./play-lyrics/play-lyrics.component";

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'new/lyrics', component: NewLyricsComponent },
  { path: 'play/lyrics/:id', component: PlayLyricsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
