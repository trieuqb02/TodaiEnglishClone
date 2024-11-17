import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTestLayoutComponent } from './user-test-layout.component';

describe('UserTestLayoutComponent', () => {
  let component: UserTestLayoutComponent;
  let fixture: ComponentFixture<UserTestLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserTestLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserTestLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
