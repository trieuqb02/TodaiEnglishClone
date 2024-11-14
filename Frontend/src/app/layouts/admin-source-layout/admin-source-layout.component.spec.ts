import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSourceLayoutComponent } from './admin-source-layout.component';

describe('AdminSourceLayoutComponent', () => {
  let component: AdminSourceLayoutComponent;
  let fixture: ComponentFixture<AdminSourceLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminSourceLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminSourceLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
