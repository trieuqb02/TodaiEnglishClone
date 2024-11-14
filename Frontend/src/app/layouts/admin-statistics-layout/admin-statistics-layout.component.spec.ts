import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStatisticsLayoutComponent } from './admin-statistics-layout.component';

describe('AdminStatisticsLayoutComponent', () => {
  let component: AdminStatisticsLayoutComponent;
  let fixture: ComponentFixture<AdminStatisticsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminStatisticsLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminStatisticsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
