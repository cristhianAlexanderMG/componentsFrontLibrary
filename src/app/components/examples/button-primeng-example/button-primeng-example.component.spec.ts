import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPrimengExampleComponent } from './button-primeng-example.component';

describe('ButtonPrimengExampleComponent', () => {
  let component: ButtonPrimengExampleComponent;
  let fixture: ComponentFixture<ButtonPrimengExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonPrimengExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPrimengExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
