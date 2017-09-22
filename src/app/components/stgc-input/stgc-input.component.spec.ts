import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StgcInputComponent } from './stgc-input.component';

describe('StgcInputComponent', () => {
  let component: StgcInputComponent;
  let fixture: ComponentFixture<StgcInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StgcInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StgcInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
