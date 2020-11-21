import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLyricsComponent } from './new-lyrics.component';

describe('NewLyricsComponent', () => {
  let component: NewLyricsComponent;
  let fixture: ComponentFixture<NewLyricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLyricsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLyricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
