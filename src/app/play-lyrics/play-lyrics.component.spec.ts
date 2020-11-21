import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayLyricsComponent } from './play-lyrics.component';

describe('PlayLyricsComponent', () => {
  let component: PlayLyricsComponent;
  let fixture: ComponentFixture<PlayLyricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayLyricsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayLyricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
