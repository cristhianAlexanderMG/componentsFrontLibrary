import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPrimengComponent } from './input-primeng.component';

describe('InputPrimengComponent', () => {
  let component: InputPrimengComponent;
  let fixture: ComponentFixture<InputPrimengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPrimengComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
