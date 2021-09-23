import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesPrimengExampleComponent } from './themes-primeng-example.component';

describe('ThemesPrimengExampleComponent', () => {
  let component: ThemesPrimengExampleComponent;
  let fixture: ComponentFixture<ThemesPrimengExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemesPrimengExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemesPrimengExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
