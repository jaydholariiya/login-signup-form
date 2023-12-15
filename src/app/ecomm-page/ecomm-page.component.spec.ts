import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommPageComponent } from './ecomm-page.component';

describe('EcommPageComponent', () => {
  let component: EcommPageComponent;
  let fixture: ComponentFixture<EcommPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcommPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcommPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
