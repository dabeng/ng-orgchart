import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DefaultChartComponent } from './default-chart/default-chart.component';
import { PanZoomChartComponent } from './pan-zoom-chart/pan-zoom-chart.component';
import { CustomNodeTemplateChartComponent } from './custom-node-template-chart/custom-node-template-chart.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'default-chart', component: DefaultChartComponent },
  { path: 'pan-zoom-chart', component: PanZoomChartComponent },
  { path: 'custom-node-template-chart', component: CustomNodeTemplateChartComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
