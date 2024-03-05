import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProjectComponent } from './project/project.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ReadingsComponent } from './readings/readings.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'project', component: ProjectComponent},
  { path: 'readings', component: ReadingsComponent},
  { path: 'calendar', component: CalendarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
