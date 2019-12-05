import { TestBed } from '@angular/core/testing';

import { NgOrgchartService } from './ng-orgchart.service';

describe('NgOrgchartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgOrgchartService = TestBed.get(NgOrgchartService);
    expect(service).toBeTruthy();
  });
});
