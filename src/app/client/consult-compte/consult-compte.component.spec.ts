import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultCompteComponent } from './consult-compte.component';

describe('ConsultCompteComponent', () => {
  let component: ConsultCompteComponent;
  let fixture: ComponentFixture<ConsultCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
