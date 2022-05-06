import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeDashboardComponent } from './containers/employee-dashboard/employee-dashboard.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        EmployeeDashboardComponent,
        EmployeeListComponent,
        EmployeeDetailComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
