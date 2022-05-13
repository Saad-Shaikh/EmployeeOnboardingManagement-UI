import { EmployeeDetailDTO } from './../../models/employee-detail-dto.interface';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { TaskDetailDTO } from './../../models/task-detail-dto.interface';
import { OnboardingTaskAssignDTO } from './../../models/onboarding-task-assign-dto.interface';

@Component({
    selector: 'employee-onboarding-assign',
    templateUrl: './employee-onboarding-assign.component.html',
    styleUrls: ['./employee-onboarding-assign.component.css']
})
export class EmployeeOnboardingAssignComponent implements OnInit {
    @Input()
    employee!: EmployeeDetailDTO | null;
    @Input()
    unassignedOnboardingTasks: TaskDetailDTO[] = [];

    @Output()
    taskAssigned: EventEmitter<OnboardingTaskAssignDTO> = new EventEmitter();
    @Output()
    closeClicked: EventEmitter<void> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    assignTasksToEmployee(taskId: number): void {
        let _task = this.unassignedOnboardingTasks.find(task => task.id == taskId);
        this.unassignedOnboardingTasks = this.unassignedOnboardingTasks.filter(task => task.id != taskId);
        if (_task && this.employee) {
            const onboardingTaskAssignDTO: OnboardingTaskAssignDTO = {
                id: this.employee.id,
                taskList: [_task]
            }
            this.taskAssigned.emit(onboardingTaskAssignDTO);
        }
    }

}
