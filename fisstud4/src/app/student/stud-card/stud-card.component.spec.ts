import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudCardComponent } from './stud-card.component';

describe('StudCardComponent', () => {
  let component: StudCardComponent;
  let fixture: ComponentFixture<StudCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudCardComponent]
    });
    fixture = TestBed.createComponent(StudCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
