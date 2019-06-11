import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiaLayoutComponent } from './chia-layout.component';

describe('ChiaLayoutComponent', () => {
  let component: ChiaLayoutComponent;
  let fixture: ComponentFixture<ChiaLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiaLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
