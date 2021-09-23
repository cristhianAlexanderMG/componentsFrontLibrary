import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownPrimengExampleComponent } from './dropdown-primeng-example.component';

describe('DropdownPrimengExampleComponent', () => {
  let component: DropdownPrimengExampleComponent;
  let fixture: ComponentFixture<DropdownPrimengExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownPrimengExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownPrimengExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
