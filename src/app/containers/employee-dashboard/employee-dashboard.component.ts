import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { EmployeeListDTO } from '../../models/employee-list-dto.interface';
import { EmployeeDetailDTO } from './../../models/employee-detail-dto.interface';
import { EmployeeCreateDTO } from './../../models/employee-create-dto.interface';
import { OnboardingTaskAssignDTO } from './../../models/onboarding-task-assign-dto.interface';
import { OnboardingTaskDetailDTO } from './../../models/onboarding-task-detail-dto.interface';
import { OnboardingTaskUpdateDTO } from './../../models/onboarding-task-update-dto.interface';
import { TaskDetailDTO } from './../../models/task-detail-dto.interface';
import { ProjectAndProjectTasksDTO } from './../../models/project-and-project-tasks-dto.interface';
import { EmployeeDashboardService } from './employee-dashboard.service';
import { TaskDashboardServiceService } from './../task-dashboard/task-dashboard.service';
import { OnboardingService } from './onboarding.service';
import { ProjectService } from './project.service';

@Component({
    selector: 'employee-dashboard',
    templateUrl: './employee-dashboard.component.html'
})
export class EmployeeDashboardComponent implements OnInit {
    private allTasks: TaskDetailDTO[] = [];
    employeeList: EmployeeListDTO[] = [];
    selectedEmployee: EmployeeDetailDTO | null = null;
    selectedEmployeeObTasks: OnboardingTaskDetailDTO[] = [];
    unassignedOnboardingTasks: TaskDetailDTO[] = [];
    selectedEmployeeProjectDetails: ProjectAndProjectTasksDTO | null = null;

    creating: boolean = false;
    editing: boolean = false;
    onboarding: boolean = false;
    project: boolean = false;

    constructor(private employeeDashboardService: EmployeeDashboardService, private taskDashboardService: TaskDashboardServiceService,
        private onboardingService: OnboardingService, private projectService: ProjectService) { }

    ngOnInit(): void {
        this.fetchEmployees();
        this.taskDashboardService.getAllTasks().subscribe(
            (tasks: TaskDetailDTO[]) => {
                this.allTasks = tasks;
            }
        );
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
                this.ngOnInit();
                this.selectedEmployee = employee;
            }
        );
        this.fetchEmployees();
    }

    onCreateCancelled(): void {
        this.creating = false;
        this.selectedEmployee = null;
    }

    onViewOnboardingClicked(): void {
        if (this.selectedEmployee) {
            this.onboardingService.getEmployeeOnboardingTasks(this.selectedEmployee?.id).subscribe(
                (onboardingTasks: OnboardingTaskDetailDTO[]) => {
                    this.selectedEmployeeObTasks = onboardingTasks;
                    this.onboarding = true;
                }
            );
        }
    }

    onTaskUpdateClicked(obTask: OnboardingTaskUpdateDTO): void {
        this.onboardingService.updateEmployeeOnboardingTask(obTask).subscribe(
            (onboardingTasks: OnboardingTaskDetailDTO[]) => {
                this.selectedEmployeeObTasks = onboardingTasks;
                this.onboarding = true;
            }
        );
    }

    onAssignButtonClicked(): void {
        const employeeObTasksIds = this.selectedEmployeeObTasks.map((obTask) => obTask.task.id);
        this.unassignedOnboardingTasks = this.allTasks.filter((task) => (!employeeObTasksIds.includes(task.id)) && task.taskType.toString() == "ONBOARDING");
    }

    onTaskAssigned(onboardingTaskAssignDTO: OnboardingTaskAssignDTO): void {
        this.onboardingService.assignEmployeeOnboardingTask(onboardingTaskAssignDTO.id, onboardingTaskAssignDTO).subscribe(
            (onboardingTasks: OnboardingTaskDetailDTO[]) => {
                this.selectedEmployeeObTasks.push(...onboardingTasks);
            }
        );
    }

    onViewProjectClicked(): void {
        if (this.selectedEmployee) {
            this.projectService.getEmployeeProject(this.selectedEmployee?.id).subscribe(
                (projectDetails: ProjectAndProjectTasksDTO) => {
                    this.selectedEmployeeProjectDetails = projectDetails;
                    this.project = true;
                },
                (error: HttpErrorResponse) => {
                    if (error.error.developerMessage === `Project for Employee with id ${this.selectedEmployee?.id} does not exist!`) {
                        this.selectedEmployeeProjectDetails = null;
                        this.project = true;
                    }
                }
            );
        }
    }
}
