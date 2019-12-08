import { NgModule } from '@angular/core';
import { NgOrgchartComponent } from './ng-orgchart.component';
import { ChartContainerComponent } from './components/chart-container/chart-container.component';

@NgModule({
  declarations: [NgOrgchartComponent, ChartContainerComponent],
  imports: [
  ],
  exports: [NgOrgchartComponent]
})
export class NgOrgchartModule { }
