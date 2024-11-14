import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTestLayoutComponent } from './admin-test-layout.component';

describe('AdminTestLayoutComponent', () => {
  let component: AdminTestLayoutComponent;
  let fixture: ComponentFixture<AdminTestLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminTestLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminTestLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
