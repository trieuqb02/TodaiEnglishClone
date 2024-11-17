import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOtherNewsComponent } from './list-other-news.component';

describe('ListOtherNewsComponent', () => {
  let component: ListOtherNewsComponent;
  let fixture: ComponentFixture<ListOtherNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListOtherNewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListOtherNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
