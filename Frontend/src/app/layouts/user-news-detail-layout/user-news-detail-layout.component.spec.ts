import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNewsDetailLayoutComponent } from './user-news-detail-layout.component';

describe('UserNewsDetailLayoutComponent', () => {
  let component: UserNewsDetailLayoutComponent;
  let fixture: ComponentFixture<UserNewsDetailLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserNewsDetailLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserNewsDetailLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
