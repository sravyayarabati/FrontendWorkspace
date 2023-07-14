import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetacntdetailsComponent } from './getacntdetails.component';

describe('GetacntdetailsComponent', () => {
  let component: GetacntdetailsComponent;
  let fixture: ComponentFixture<GetacntdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetacntdetailsComponent]
    });
    fixture = TestBed.createComponent(GetacntdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
