import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesInTheatersComponent } from './movies-in-theaters.component';

describe('MoviesInTheatersComponent', () => {
  let component: MoviesInTheatersComponent;
  let fixture: ComponentFixture<MoviesInTheatersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesInTheatersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesInTheatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
