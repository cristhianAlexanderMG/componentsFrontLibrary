import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPrimengExampleComponent } from './input-primeng-example.component';

describe('InputPrimengExampleComponent', () => {
  let component: InputPrimengExampleComponent;
  let fixture: ComponentFixture<InputPrimengExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPrimengExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPrimengExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
