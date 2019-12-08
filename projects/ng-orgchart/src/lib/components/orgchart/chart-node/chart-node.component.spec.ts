import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartNodeComponent } from './chart-node.component';

describe('ChartNodeComponent', () => {
  let component: ChartNodeComponent;
  let fixture: ComponentFixture<ChartNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
