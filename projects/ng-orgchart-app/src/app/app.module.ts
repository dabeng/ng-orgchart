import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrgchartModule } from 'ng-orgchart';
import { DefaultChartComponent } from './default-chart/default-chart.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultChartComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule,
    AppRoutingModule,
    OrgchartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
