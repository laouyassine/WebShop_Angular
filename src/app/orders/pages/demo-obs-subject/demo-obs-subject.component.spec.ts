import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoObsSubjectComponent } from './demo-obs-subject.component';

describe('DemoObsSubjectComponent', () => {
  let component: DemoObsSubjectComponent;
  let fixture: ComponentFixture<DemoObsSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoObsSubjectComponent]
    });
    fixture = TestBed.createComponent(DemoObsSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
