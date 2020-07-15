import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoltdialogComponent } from './boltdialog.component';

describe('BoltdialogComponent', () => {
  let component: BoltdialogComponent;
  let fixture: ComponentFixture<BoltdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoltdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoltdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
