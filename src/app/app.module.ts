import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryChartDataService } from './in-memory-chart-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChartComponent } from './chart/chart.component';
import { UsersComponent } from './users/users.component';
import { OrderUsersByPipe } from './order-users-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChartComponent,
    UsersComponent,
    OrderUsersByPipe
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryChartDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
