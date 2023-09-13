import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFullWidthComponent } from './template-full-width.component';

describe('TemplateFullWidthComponent', () => {
  let component: TemplateFullWidthComponent;
  let fixture: ComponentFixture<TemplateFullWidthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateFullWidthComponent]
    });
    fixture = TestBed.createComponent(TemplateFullWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
