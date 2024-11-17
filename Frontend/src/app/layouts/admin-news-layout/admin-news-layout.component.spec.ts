import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewsLayoutComponent } from './admin-news-layout.component';

describe('AdminNewsLayoutComponent', () => {
  let component: AdminNewsLayoutComponent;
  let fixture: ComponentFixture<AdminNewsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminNewsLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminNewsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
