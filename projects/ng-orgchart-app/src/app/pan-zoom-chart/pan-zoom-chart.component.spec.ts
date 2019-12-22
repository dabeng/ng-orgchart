import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanZoomChartComponent } from './pan-zoom-chart.component';

describe('PanZoomChartComponent', () => {
  let component: PanZoomChartComponent;
  let fixture: ComponentFixture<PanZoomChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanZoomChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanZoomChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
