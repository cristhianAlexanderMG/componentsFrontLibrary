import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorPrimengComponent } from './editor-primeng.component';

describe('EditorPrimengComponent', () => {
  let component: EditorPrimengComponent;
  let fixture: ComponentFixture<EditorPrimengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorPrimengComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
