import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReademployeeComponent } from './reademployee.component';

describe('ReademployeeComponent', () => {
  let component: ReademployeeComponent;
  let fixture: ComponentFixture<ReademployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReademployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReademployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
