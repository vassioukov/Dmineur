import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckValidationComponent } from './check-validation.component';

describe('CheckValidationComponent', () => {
  let component: CheckValidationComponent;
  let fixture: ComponentFixture<CheckValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
