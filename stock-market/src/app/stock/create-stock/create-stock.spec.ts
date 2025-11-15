import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStock } from './create-stock';

describe('CreateStock', () => {
  let component: CreateStock;
  let fixture: ComponentFixture<CreateStock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [CreateStock]
})
    .compileComponents();

    fixture = TestBed.createComponent(CreateStock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
