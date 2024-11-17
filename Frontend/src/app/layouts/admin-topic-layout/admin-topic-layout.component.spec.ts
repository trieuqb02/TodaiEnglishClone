import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTopicLayoutComponent } from './admin-topic-layout.component';

describe('AdminTopicLayoutComponent', () => {
  let component: AdminTopicLayoutComponent;
  let fixture: ComponentFixture<AdminTopicLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminTopicLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminTopicLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
