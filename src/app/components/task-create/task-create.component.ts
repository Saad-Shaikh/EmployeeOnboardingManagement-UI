import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { TaskType } from './../../enums/task-type.enum';
import { TaskCreateDTO } from '../../models/task-create-dto.interface';

@Component({
    selector: 'task-create',
    templateUrl: './task-create.component.html',
    styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
    taskTypes: string[] = [];

    @Output()
    taskCreated: EventEmitter<TaskCreateDTO> = new EventEmitter();
    @Output()
    createCancelled: EventEmitter<void> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
        for (let taskType in TaskType) {
            this.taskTypes.push(taskType);
        }
    }

    createTask(task: TaskCreateDTO): void {
        this.taskCreated.emit(task);
    }

}
