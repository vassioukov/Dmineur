import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementClientsByAgentsComponent } from './management-clients.component';

describe('ManagementClientsByAgentsComponent', () => {
  let component: ManagementClientsByAgentsComponent;
  let fixture: ComponentFixture<ManagementClientsByAgentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementClientsByAgentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementClientsByAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
