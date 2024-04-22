import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisyonlarComponent } from './misyonlar.component';

describe('MisyonlarComponent', () => {
  let component: MisyonlarComponent;
  let fixture: ComponentFixture<MisyonlarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisyonlarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MisyonlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
