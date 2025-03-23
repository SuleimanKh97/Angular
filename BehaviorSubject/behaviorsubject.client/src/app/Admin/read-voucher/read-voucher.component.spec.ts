import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadVoucherComponent } from './read-voucher.component';

describe('ReadVoucherComponent', () => {
  let component: ReadVoucherComponent;
  let fixture: ComponentFixture<ReadVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadVoucherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
