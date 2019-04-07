import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMenuModule, MatSelectModule, MatInputModule, MatButtonModule, MatNativeDateModule } from '@angular/material';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { KhDatePickerComponent } from './kh-date-picker/kh-date-picker.component';
import { MonthPicker } from './month-picker';
import { YearPicker } from './year-picker';
import { RangeEmitterService } from './range-emitter.service';
import { ChartUpdaterService } from './chart-updater.service';

@NgModule({
  declarations: [
    AppComponent,
    MyLineChartComponent,
    KhDatePickerComponent,
    MonthPicker,
    YearPicker
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    ChartsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule
  ],
  providers: [
    MatDatepickerModule,
    ChartUpdaterService,
    RangeEmitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
