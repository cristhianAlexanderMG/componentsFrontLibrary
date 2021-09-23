import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordPrimengExampleComponent } from './word-primeng-example.component';

describe('WordPrimengExampleComponent', () => {
  let component: WordPrimengExampleComponent;
  let fixture: ComponentFixture<WordPrimengExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordPrimengExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordPrimengExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
