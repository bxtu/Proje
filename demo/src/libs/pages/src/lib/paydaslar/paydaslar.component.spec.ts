import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaydaslarComponent } from './paydaslar.component';

describe('PaydaslarComponent', () => {
  let component: PaydaslarComponent;
  let fixture: ComponentFixture<PaydaslarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaydaslarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaydaslarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
