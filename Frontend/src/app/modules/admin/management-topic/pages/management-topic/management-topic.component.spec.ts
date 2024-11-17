import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementTopicComponent } from './management-topic.component';

describe('TopicComponent', () => {
  let component: ManagementTopicComponent;
  let fixture: ComponentFixture<ManagementTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagementTopicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
