import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GratituteComponent } from './gratitute.component';

describe('GratituteComponent', () => {
  let component: GratituteComponent;
  let fixture: ComponentFixture<GratituteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GratituteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GratituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});