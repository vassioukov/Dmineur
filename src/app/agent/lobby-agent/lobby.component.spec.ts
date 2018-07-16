import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyAgentComponent } from './lobby.component';

describe('LobbyComponent', () => {
  let component: LobbyAgentComponent;
  let fixture: ComponentFixture<LobbyAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LobbyAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LobbyAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
