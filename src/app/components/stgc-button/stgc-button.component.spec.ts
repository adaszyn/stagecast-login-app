import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StgcButtonComponent } from './stgc-button.component';

describe('StgcButtonComponent', () => {
  let component: StgcButtonComponent;
  let fixture: ComponentFixture<StgcButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StgcButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StgcButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
