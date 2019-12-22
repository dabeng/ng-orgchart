import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNodeTemplateChartComponent } from './custom-node-template-chart.component';

describe('CustomNodeTemplateChartComponent', () => {
  let component: CustomNodeTemplateChartComponent;
  let fixture: ComponentFixture<CustomNodeTemplateChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomNodeTemplateChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomNodeTemplateChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
