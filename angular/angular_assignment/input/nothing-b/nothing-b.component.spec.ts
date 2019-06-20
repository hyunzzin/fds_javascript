import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NothingBComponent } from './nothing-b.component';

describe('NothingBComponent', () => {
  let component: NothingBComponent;
  let fixture: ComponentFixture<NothingBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NothingBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NothingBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
