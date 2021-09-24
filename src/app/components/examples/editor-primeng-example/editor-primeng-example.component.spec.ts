import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorPrimengExampleComponent } from './editor-primeng-example.component';

describe('EditorPrimengExampleComponent', () => {
  let component: EditorPrimengExampleComponent;
  let fixture: ComponentFixture<EditorPrimengExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorPrimengExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorPrimengExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
