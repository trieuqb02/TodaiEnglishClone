import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oauth2ButtonComponent } from './oauth2-button.component';

describe('Oauth2ButtonComponent', () => {
  let component: Oauth2ButtonComponent;
  let fixture: ComponentFixture<Oauth2ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Oauth2ButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Oauth2ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
