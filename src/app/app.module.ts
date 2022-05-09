import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// containers
import { EmployeeDashboardComponent } from './containers/employee-dashboard/employee-dashboard.component';
import { TeamDashboardComponent } from './containers/team-dashboard/team-dashboard.component';
import { TaskDashboardComponent } from './containers/task-dashboard/task-dashboard.component';

// components
import { HeaderComponent } from './components/header/header.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        EmployeeDashboardComponent,
        EmployeeListComponent,
        EmployeeDetailComponent,
        TeamDashboardComponent,
        TaskDashboardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
