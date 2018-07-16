import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestByAgentComponent } from './request-by-agent.component';

describe('RequestByAgentComponent', () => {
  let component: RequestByAgentComponent;
  let fixture: ComponentFixture<RequestByAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestByAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestByAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
