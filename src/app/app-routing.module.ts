import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeDashboardComponent } from './containers/employee-dashboard/employee-dashboard.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { TaskDashboardComponent } from './containers/task-dashboard/task-dashboard.component';
import { TeamDashboardComponent } from './containers/team-dashboard/team-dashboard.component';

const routes: Routes = [
    { path: '', redirectTo: '/employees', pathMatch: 'full' },
    {
        path: 'employees', component: EmployeeDashboardComponent, children: [
            { path: ':id', component: EmployeeDetailComponent }
        ]
    },
    { path: 'teams', component: TeamDashboardComponent },
    { path: 'tasks', component: TaskDashboardComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
