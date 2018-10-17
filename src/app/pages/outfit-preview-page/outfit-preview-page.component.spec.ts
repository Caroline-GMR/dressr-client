import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutfitPreviewPageComponent } from './outfit-preview-page.component';

describe('OutfitPreviewPageComponent', () => {
  let component: OutfitPreviewPageComponent;
  let fixture: ComponentFixture<OutfitPreviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutfitPreviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutfitPreviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
