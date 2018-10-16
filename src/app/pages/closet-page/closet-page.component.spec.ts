import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosetPageComponent } from './closet-page.component';

describe('ClosetPageComponent', () => {
  let component: ClosetPageComponent;
  let fixture: ComponentFixture<ClosetPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosetPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
