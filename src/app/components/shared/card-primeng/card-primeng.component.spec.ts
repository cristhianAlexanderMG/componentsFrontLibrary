import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPrimengComponent } from './card-primeng.component';

describe('CardPrimengComponent', () => {
  let component: CardPrimengComponent;
  let fixture: ComponentFixture<CardPrimengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPrimengComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
