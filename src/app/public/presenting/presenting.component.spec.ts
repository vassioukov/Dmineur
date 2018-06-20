import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentingComponent } from './presenting.component';

describe('PresentingComponent', () => {
  let component: PresentingComponent;
  let fixture: ComponentFixture<PresentingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
