import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarPrimengExampleComponent } from './calendar-primeng-example.component';

describe('CalendarPrimengExampleComponent', () => {
  let component: CalendarPrimengExampleComponent;
  let fixture: ComponentFixture<CalendarPrimengExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarPrimengExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarPrimengExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
