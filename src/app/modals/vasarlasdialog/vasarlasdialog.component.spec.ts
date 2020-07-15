import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VasarlasdialogComponent } from './vasarlasdialog.component';

describe('VasarlasdialogComponent', () => {
  let component: VasarlasdialogComponent;
  let fixture: ComponentFixture<VasarlasdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VasarlasdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VasarlasdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
