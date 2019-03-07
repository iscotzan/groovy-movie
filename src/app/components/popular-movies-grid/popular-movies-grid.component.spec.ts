import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularMoviesGridComponent } from './popular-movies-grid.component';

describe('PopularMoviesGridComponent', () => {
  let component: PopularMoviesGridComponent;
  let fixture: ComponentFixture<PopularMoviesGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularMoviesGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularMoviesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
