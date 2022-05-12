import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { TaskDetailDTO } from './../../models/task-detail-dto.interface';

@Component({
    selector: 'task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
    @Input()
    taskSelected: boolean = false;
    @Input()
    taskList: TaskDetailDTO[] = []

    @Output()
    deleteClicked: EventEmitter<number> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

}
