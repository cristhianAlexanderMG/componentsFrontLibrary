import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPrimengComponent } from './button-primeng.component';

describe('ButtonPrimengComponent', () => {
  let component: ButtonPrimengComponent;
  let fixture: ComponentFixture<ButtonPrimengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonPrimengComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
