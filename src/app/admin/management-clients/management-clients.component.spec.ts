import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementsClientsByAgentComponent } from './managements-clients.component';

describe('ManagementsClientsByAgentComponent', () => {
  let component: ManagementsClientsByAgentComponent;
  let fixture: ComponentFixture<ManagementsClientsByAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementsClientsByAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementsClientsByAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
