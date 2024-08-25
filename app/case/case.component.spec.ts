import { TestBed } from '@angular/core/testing';
import { StoryCaseComponent } from './case.component';
import { stories } from '../Services/stories'; // Import the stories service

describe('CaseComponent', () => {
  let component: StoryCaseComponent;
  let fixture: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryCaseComponent],
      providers: [{ provide: stories, useValue: stories }] // Provide the stories service
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});