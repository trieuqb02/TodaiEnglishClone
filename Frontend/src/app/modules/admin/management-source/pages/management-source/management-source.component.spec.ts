import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementSourceComponent } from './management-source.component';

describe('SourceComponent', () => {
  let component: ManagementSourceComponent;
  let fixture: ComponentFixture<ManagementSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagementSourceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
