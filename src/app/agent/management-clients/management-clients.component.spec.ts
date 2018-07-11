import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementClientsByAgentComponent } from './management-clients.component';

describe('ManagementClientsByAgentComponent', () => {
  let component: ManagementClientsByAgentComponent;
  let fixture: ComponentFixture<ManagementClientsByAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementClientsByAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementClientsByAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
