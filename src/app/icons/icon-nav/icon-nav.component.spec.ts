import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconNavComponent } from './icon-nav.component';

describe('IconNavComponent', () => {
  let component: IconNavComponent;
  let fixture: ComponentFixture<IconNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconNavComponent]
    });
    fixture = TestBed.createComponent(IconNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
