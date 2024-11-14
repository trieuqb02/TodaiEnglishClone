import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVideoLayoutComponent } from './user-video-layout.component';

describe('UserVideoLayoutComponent', () => {
  let component: UserVideoLayoutComponent;
  let fixture: ComponentFixture<UserVideoLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserVideoLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserVideoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
