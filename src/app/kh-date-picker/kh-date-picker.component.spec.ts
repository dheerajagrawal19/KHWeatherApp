import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhDatePickerComponent } from './kh-date-picker.component';

describe('KhDatePickerComponent', () => {
  let component: KhDatePickerComponent;
  let fixture: ComponentFixture<KhDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
