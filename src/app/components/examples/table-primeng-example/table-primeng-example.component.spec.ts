import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePrimengExampleComponent } from './table-primeng-example.component';

describe('TablePrimengExampleComponent', () => {
  let component: TablePrimengExampleComponent;
  let fixture: ComponentFixture<TablePrimengExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePrimengExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePrimengExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
