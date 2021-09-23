import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownPrimengComponent } from './dropdown-primeng.component';

describe('DropdownPrimengComponent', () => {
  let component: DropdownPrimengComponent;
  let fixture: ComponentFixture<DropdownPrimengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownPrimengComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
