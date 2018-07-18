import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskCheckComponent } from './ask-check.component';

describe('AskCheckComponent', () => {
  let component: AskCheckComponent;
  let fixture: ComponentFixture<AskCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
