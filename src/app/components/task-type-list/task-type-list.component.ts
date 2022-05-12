import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { TaskType } from './../../enums/task-type.enum';

@Component({
    selector: 'task-type-list',
    templateUrl: './task-type-list.component.html',
    styleUrls: ['./task-type-list.component.css']
})
export class TaskTypeListComponent implements OnInit {
    taskTypes: string[] = [];

    @Output()
    taskTypeSelected: EventEmitter<string> = new EventEmitter();
    @Output()
    createClicked: EventEmitter<void> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
        for (let taskType in TaskType) {
            this.taskTypes.push(taskType);
        }
    }

}
