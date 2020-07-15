import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VasarlasTetelDialogComponent } from './vasarlas-tetel-dialog.component';

describe('VasarlasTetelDialogComponent', () => {
  let component: VasarlasTetelDialogComponent;
  let fixture: ComponentFixture<VasarlasTetelDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VasarlasTetelDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VasarlasTetelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
