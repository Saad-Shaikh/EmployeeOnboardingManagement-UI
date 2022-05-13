import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { OnboardingTaskAssignDTO } from './../../models/onboarding-task-assign-dto.interface';
import { OnboardingTaskUpdateDTO } from './../../models/onboarding-task-update-dto.interface';
import { OnboardingTaskDetailDTO } from './../../models/onboarding-task-detail-dto.interface';
import { TaskDetailDTO } from './../../models/task-detail-dto.interface';
import { EmployeeDetailDTO } from './../../models/employee-detail-dto.interface';
import { TaskStatus } from './../../enums/task-status.enum';

@Component({
    selector: 'employee-onboarding-view',
    templateUrl: './employee-onboarding-view.component.html',
    styleUrls: ['./employee-onboarding-view.component.css']
})
export class EmployeeOnboardingViewComponent implements OnInit {
    taskStatuses: string[] = [];
    assigning: boolean = false;

    @Input()
    employee: EmployeeDetailDTO | null = null;
    @Input()
    onboardingTasks: OnboardingTaskDetailDTO[] = [];
    @Input()
    unassignedOnboardingTasks: TaskDetailDTO[] = [];

    @Output()
    assignClicked: EventEmitter<void> = new EventEmitter();
    @Output()
    taskAssigned: EventEmitter<OnboardingTaskAssignDTO> = new EventEmitter();
    @Output()
    taskUpdateClicked: EventEmitter<OnboardingTaskUpdateDTO> = new EventEmitter();
    @Output()
    backButtonClicked: EventEmitter<void> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
        for (let taskStatus in TaskStatus) {
            this.taskStatuses.push(taskStatus);
        }
    }

    updateTask(id: number): void {
        const _remarks = (<HTMLInputElement>document.getElementById(`remarks_${id}`)).value;
        const _startDate = (<HTMLInputElement>document.getElementById(`startDate_${id}`)).valueAsDate;
        const _endDate = (<HTMLInputElement>document.getElementById(`endDate_${id}`)).valueAsDate;
        const _links = (<HTMLInputElement>document.getElementById(`links_${id}`)).value;
        const _status = (<HTMLInputElement>document.getElementById(`status_${id}`)).value;

        const taskUpdateDTO: OnboardingTaskUpdateDTO = {
            id: id,
            employeeId: this.employee?.id,
            remarks: _remarks,
            startDate: _startDate == null ? new Date() : _startDate,
            endDate: _endDate == null ? new Date() : _endDate,
            links: _links,
            status: _status
        };
        this.taskUpdateClicked.emit(taskUpdateDTO);
    }

    assignButtonClicked(): void {
        this.assigning = true;
        this.assignClicked.emit();
    }

}
