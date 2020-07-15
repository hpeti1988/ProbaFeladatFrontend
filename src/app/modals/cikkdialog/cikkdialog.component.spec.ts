import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CikkdialogComponent } from './cikkdialog.component';

describe('CikkdialogComponent', () => {
  let component: CikkdialogComponent;
  let fixture: ComponentFixture<CikkdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CikkdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CikkdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
