import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciteComponent } from './recite.component';

describe('ReciteComponent', () => {
  let component: ReciteComponent;
  let fixture: ComponentFixture<ReciteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', waitForAsync(() => {
    expect(component).toBeTruthy();
  }));
});