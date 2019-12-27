import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChartComponent } from './edit-chart.component';

describe('EditChartComponent', () => {
  let component: EditChartComponent;
  let fixture: ComponentFixture<EditChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
