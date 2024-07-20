import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizasyonSemaComponent } from './organizasyon-sema.component';

describe('OrganizasyonSemaComponent', () => {
  let component: OrganizasyonSemaComponent;
  let fixture: ComponentFixture<OrganizasyonSemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizasyonSemaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizasyonSemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
