import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmodalProfileComponent } from './ngmodal-profile.component';

describe('NgmodalProfileComponent', () => {
  let component: NgmodalProfileComponent;
  let fixture: ComponentFixture<NgmodalProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgmodalProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgmodalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
