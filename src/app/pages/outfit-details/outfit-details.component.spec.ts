import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutfitDetailsComponent } from './outfit-details.component';

describe('OutfitDetailsComponent', () => {
  let component: OutfitDetailsComponent;
  let fixture: ComponentFixture<OutfitDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutfitDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutfitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
