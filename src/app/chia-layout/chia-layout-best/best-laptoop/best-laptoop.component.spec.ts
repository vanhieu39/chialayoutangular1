import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestLaptoopComponent } from './best-laptoop.component';

describe('BestLaptoopComponent', () => {
  let component: BestLaptoopComponent;
  let fixture: ComponentFixture<BestLaptoopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestLaptoopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestLaptoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
