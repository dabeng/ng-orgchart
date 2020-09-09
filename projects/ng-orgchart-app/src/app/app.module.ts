import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrgchartModule } from 'ng-orgchart';
import { DefaultChartComponent } from './default-chart/default-chart.component';
import { HomeComponent } from './home/home.component';
import { CustomNodeTemplateChartComponent } from './custom-node-template-chart/custom-node-template-chart.component';
import { PanZoomChartComponent } from './pan-zoom-chart/pan-zoom-chart.component';
import { EditChartComponent } from './edit-chart/edit-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultChartComponent,
    HomeComponent,
    CustomNodeTemplateChartComponent,
    PanZoomChartComponent,
    EditChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    OrgchartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
