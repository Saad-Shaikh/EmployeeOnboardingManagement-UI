import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
import { TeamCreateComponent } from './components/team-create/team-create.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        EmployeeDashboardComponent,
        EmployeeListComponent,
        EmployeeDetailComponent,
        TeamDashboardComponent,
        TaskDashboardComponent,
        TeamListComponent,
        TeamDetailComponent,
        EmployeeCreateComponent,
        TeamCreateComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
