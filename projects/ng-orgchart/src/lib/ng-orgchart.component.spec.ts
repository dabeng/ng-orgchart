import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOrgchartComponent } from './ng-orgchart.component';

describe('NgOrgchartComponent', () => {
  let component: NgOrgchartComponent;
  let fixture: ComponentFixture<NgOrgchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgOrgchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOrgchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
