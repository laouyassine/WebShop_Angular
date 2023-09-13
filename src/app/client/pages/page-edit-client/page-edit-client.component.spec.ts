import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditClientComponent } from './page-edit-client.component';

describe('PageEditClientComponent', () => {
  let component: PageEditClientComponent;
  let fixture: ComponentFixture<PageEditClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageEditClientComponent]
    });
    fixture = TestBed.createComponent(PageEditClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
