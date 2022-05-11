import { Component, OnInit } from '@angular/core';

import { EmployeeListDTO } from '../../models/employee-list-dto.interface';
import { EmployeeDetailDTO } from './../../models/employee-detail-dto.interface';
import { EmployeeCreateDTO } from './../../models/employee-create-dto.interface';
import { EmployeeDashboardService } from './employee-dashboard.service';

@Component({
    selector: 'employee-dashboard',
    templateUrl: './employee-dashboard.component.html'
})
export class EmployeeDashboardComponent implements OnInit {
    employeeList: EmployeeListDTO[] = [];
    selectedEmployee: EmployeeDetailDTO | null = null;
    creating: boolean = false;
    editing: boolean = false;

    constructor(private employeeDashboardService: EmployeeDashboardService) { }

    ngOnInit(): void {
        this.fetchEmployees();
    }

    fetchEmployees(): void {
        this.employeeDashboardService.getEmployeeList().subscribe(
            (employees: EmployeeListDTO[]) => {
                this.employeeList = employees
            }
        );
    }

    getSelectedEmployee(id: number): void {
        this.employeeDashboardService.getEmployeeById(id).subscribe(
            (employee: EmployeeDetailDTO) => {
                this.selectedEmployee = employee;
            }
        );
    }

    onCreateEmployee(newEmployee: EmployeeCreateDTO): void {
        this.employeeDashboardService.createEmployee(newEmployee).subscribe(
            (employee: EmployeeDetailDTO) => {
                this.creating = false;
                this.selectedEmployee = employee;
            }
        );
        this.fetchEmployees();
    }

    onCreateCancelled(): void {
        this.creating = false;
        this.selectedEmployee = null;
    }
}
