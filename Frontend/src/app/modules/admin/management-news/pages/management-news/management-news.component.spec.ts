import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementNewsComponent } from './management-news.component';

describe('ListComponent', () => {
  let component: ManagementNewsComponent;
  let fixture: ComponentFixture<ManagementNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagementNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
