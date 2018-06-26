import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementAgentsComponent } from './management-agents.component';

describe('ManagementAgentsComponent', () => {
  let component: ManagementAgentsComponent;
  let fixture: ComponentFixture<ManagementAgentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementAgentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
