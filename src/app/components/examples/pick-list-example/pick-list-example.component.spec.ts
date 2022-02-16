import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickListExampleComponent } from './pick-list-example.component';

describe('PickListExampleComponent', () => {
  let component: PickListExampleComponent;
  let fixture: ComponentFixture<PickListExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickListExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickListExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
