import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMovieJumboCardComponent } from './single-movie-jumbo-card.component';

describe('SingleMovieJumboCardComponent', () => {
  let component: SingleMovieJumboCardComponent;
  let fixture: ComponentFixture<SingleMovieJumboCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleMovieJumboCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMovieJumboCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
