import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationCharComponent } from './organization-char-example.component';

describe('OrganizationCharComponent', () => {
  let component: OrganizationCharComponent;
  let fixture: ComponentFixture<OrganizationCharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationCharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
