import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBankAccountsComponent } from './view-bank-accounts.component';

describe('ViewBankAccountsComponent', () => {
  let component: ViewBankAccountsComponent;
  let fixture: ComponentFixture<ViewBankAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBankAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBankAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
