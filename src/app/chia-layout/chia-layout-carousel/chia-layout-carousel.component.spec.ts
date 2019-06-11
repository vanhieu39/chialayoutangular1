import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiaLayoutCarouselComponent } from './chia-layout-carousel.component';

describe('ChiaLayoutCarouselComponent', () => {
  let component: ChiaLayoutCarouselComponent;
  let fixture: ComponentFixture<ChiaLayoutCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiaLayoutCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiaLayoutCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
