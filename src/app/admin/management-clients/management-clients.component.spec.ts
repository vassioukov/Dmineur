import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementsClientsComponent } from './managements-clients.component';

describe('ManagementsClientsComponent', () => {
  let component: ManagementsClientsComponent;
  let fixture: ComponentFixture<ManagementsClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementsClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementsClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
