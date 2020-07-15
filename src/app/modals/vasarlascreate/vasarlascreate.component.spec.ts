import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VasarlascreateComponent } from './vasarlascreate.component';

describe('VasarlascreateComponent', () => {
  let component: VasarlascreateComponent;
  let fixture: ComponentFixture<VasarlascreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VasarlascreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VasarlascreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
