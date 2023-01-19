import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartContainerComponent } from './chart-container/chart-container.component';
import { ChartNodeComponent } from './chart-node/chart-node.component';
import { NodeSelectService } from './shared/services/node-select.service';

@NgModule({
  declarations: [ChartContainerComponent, ChartNodeComponent],
  imports: [
    CommonModule
  ],
  exports: [ChartContainerComponent, ChartNodeComponent],
  providers: [NodeSelectService],
})
export class OrgchartModule { }
