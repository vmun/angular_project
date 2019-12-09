import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonDialogComponent } from './polygon-dialog.component';

describe('PolygonDialogComponent', () => {
  let component: PolygonDialogComponent;
  let fixture: ComponentFixture<PolygonDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolygonDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolygonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
