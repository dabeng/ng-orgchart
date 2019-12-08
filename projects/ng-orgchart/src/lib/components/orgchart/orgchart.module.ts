import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartContainerComponent } from './chart-container/chart-container.component';
import { ChartNodeComponent } from './chart-node/chart-node.component';

@NgModule({
  declarations: [ChartContainerComponent, ChartNodeComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [ChartContainerComponent, ChartNodeComponent]
})
export class OrgchartModule { }
