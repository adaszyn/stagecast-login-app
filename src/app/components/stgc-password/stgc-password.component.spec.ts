import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StgcPasswordComponent } from './stgc-password.component';

describe('StgcPasswordComponent', () => {
  let component: StgcPasswordComponent;
  let fixture: ComponentFixture<StgcPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StgcPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StgcPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
