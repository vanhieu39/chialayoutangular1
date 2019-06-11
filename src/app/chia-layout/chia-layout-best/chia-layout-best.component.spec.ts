import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiaLayoutBestComponent } from './chia-layout-best.component';

describe('ChiaLayoutBestComponent', () => {
  let component: ChiaLayoutBestComponent;
  let fixture: ComponentFixture<ChiaLayoutBestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiaLayoutBestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiaLayoutBestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
