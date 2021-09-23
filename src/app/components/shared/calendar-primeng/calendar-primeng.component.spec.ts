import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarPrimengComponent } from './calendar-primeng.component';

describe('CalendarPrimengComponent', () => {
  let component: CalendarPrimengComponent;
  let fixture: ComponentFixture<CalendarPrimengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarPrimengComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
