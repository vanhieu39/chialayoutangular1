import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiaLayoutMenuComponent } from './chia-layout-menu.component';

describe('ChiaLayoutMenuComponent', () => {
  let component: ChiaLayoutMenuComponent;
  let fixture: ComponentFixture<ChiaLayoutMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiaLayoutMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiaLayoutMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
