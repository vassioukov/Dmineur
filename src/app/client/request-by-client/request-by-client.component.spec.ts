import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestByClientComponent } from './request-by-client.component';

describe('RequestByClientComponent', () => {
  let component: RequestByClientComponent;
  let fixture: ComponentFixture<RequestByClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestByClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestByClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
