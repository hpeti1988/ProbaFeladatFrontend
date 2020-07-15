import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeteldeletedialogComponent } from './teteldeletedialog.component';

describe('TeteldeletedialogComponent', () => {
  let component: TeteldeletedialogComponent;
  let fixture: ComponentFixture<TeteldeletedialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeteldeletedialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeteldeletedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
