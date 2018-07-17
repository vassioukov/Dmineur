import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInfoPersoComponent } from './edit-info-perso.component';

describe('EditInfoPersoComponent', () => {
  let component: EditInfoPersoComponent;
  let fixture: ComponentFixture<EditInfoPersoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInfoPersoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInfoPersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
