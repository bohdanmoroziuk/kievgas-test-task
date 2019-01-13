import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartComponent } from './chart/chart.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'chart', component: ChartComponent },
  { path: 'users', component: UsersComponent },

  { path: '', redirectTo: '/chart', pathMatch: 'full' },
  { path: '**', redirectTo: '/chart' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
