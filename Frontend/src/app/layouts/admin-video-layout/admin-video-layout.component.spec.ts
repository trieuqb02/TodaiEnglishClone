import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVideoLayoutComponent } from './admin-video-layout.component';

describe('AdminVideoLayoutComponent', () => {
  let component: AdminVideoLayoutComponent;
  let fixture: ComponentFixture<AdminVideoLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminVideoLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminVideoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
