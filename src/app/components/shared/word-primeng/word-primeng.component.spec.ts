import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordPrimengComponent } from './word-primeng.component';

describe('WordPrimengComponent', () => {
  let component: WordPrimengComponent;
  let fixture: ComponentFixture<WordPrimengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordPrimengComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
