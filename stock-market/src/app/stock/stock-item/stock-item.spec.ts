import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItem } from './stock-item';

describe('StockItem', () => {
  let component: StockItem;
  let fixture: ComponentFixture<StockItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [StockItem]
})
    .compileComponents();

    fixture = TestBed.createComponent(StockItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
