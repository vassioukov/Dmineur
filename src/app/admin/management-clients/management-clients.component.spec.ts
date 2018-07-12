import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementClientsByAdminComponent } from './management-clients.component';

describe('ManagementsClientsByAdminComponent', () => {
  let component: ManagementClientsByAdminComponent;
  let fixture: ComponentFixture<ManagementClientsByAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementClientsByAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementClientsByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
