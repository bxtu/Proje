import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizasyonAgacComponent } from './organizasyon-agac.component';

describe('OrganizasyonAgacComponent', () => {
  let component: OrganizasyonAgacComponent;
  let fixture: ComponentFixture<OrganizasyonAgacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizasyonAgacComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizasyonAgacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
