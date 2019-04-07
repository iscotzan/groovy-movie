import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWatchItemComponent } from './add-watch-item.component';

describe('AddWatchItemComponent', () => {
  let component: AddWatchItemComponent;
  let fixture: ComponentFixture<AddWatchItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWatchItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWatchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
