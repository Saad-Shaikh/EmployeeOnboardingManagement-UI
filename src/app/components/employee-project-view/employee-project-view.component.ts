import { ProjectTaskUpdateDTO } from './../../models/project-task-update-dto.interface';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { EmployeeDetailDTO } from './../../models/employee-detail-dto.interface';
import { ProjectAndProjectTasksDTO } from './../../models/project-and-project-tasks-dto.interface';
import { TaskStatus } from './../../enums/task-status.enum';

@Component({
    selector: 'employee-project-view',
    templateUrl: './employee-project-view.component.html',
    styleUrls: ['./employee-project-view.component.css']
})
export class EmployeeProjectViewComponent implements OnInit {
    taskStatuses: string[] = [];
    creating: boolean = false;

    @Input()
    employee!: EmployeeDetailDTO | null;
    @Input()
    projectDetails!: ProjectAndProjectTasksDTO | null;

    @Output()
    taskUpdateClicked: EventEmitter<ProjectTaskUpdateDTO> = new EventEmitter();
    @Output()
    backButtonClicked: EventEmitter<void> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
        for (let taskStatus in TaskStatus) {
            this.taskStatuses.push(taskStatus);
        }
    }

    linkClicked(): void {
        console.log('clicked');
        this.creating = true;
    }

    updateTask(id: number): void {
        const _remarks = (<HTMLInputElement>document.getElementById(`remarks_${id}`)).value;
        const _startDate = (<HTMLInputElement>document.getElementById(`startDate_${id}`)).valueAsDate;
        const _endDate = (<HTMLInputElement>document.getElementById(`endDate_${id}`)).valueAsDate;
        const _links = (<HTMLInputElement>document.getElementById(`links_${id}`)).value;
        const _status = (<HTMLInputElement>document.getElementById(`status_${id}`)).value;

        const taskUpdateDTO: ProjectTaskUpdateDTO = {
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

}
