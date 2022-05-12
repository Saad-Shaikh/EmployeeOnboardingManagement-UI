import { Component, OnInit } from '@angular/core';

import { TaskDetailDTO } from './../../models/task-detail-dto.interface';
import { TaskDashboardServiceService } from './task-dashboard.service';

@Component({
    selector: 'task-dashboard',
    templateUrl: './task-dashboard.component.html'
})
export class TaskDashboardComponent implements OnInit {
    taskTypeSelected: string = "";
    taskSelected: boolean = false;
    taskList: TaskDetailDTO[] = [];
    creating: boolean = false;

    constructor(private taskDashboardService: TaskDashboardServiceService) { }

    ngOnInit(): void {
    }

    onTaskTypeSelected(taskType: string): void {
        this.taskSelected = true;
        this.taskTypeSelected = taskType;
        this.taskDashboardService.getAllTasks().subscribe(
            (tasks: TaskDetailDTO[]) => {
                this.taskList = tasks.filter(task => task.taskType == taskType);
            }
        );
    }

    onDeleteTask(id: number): void {
        this.taskDashboardService.deleteTask(id).subscribe(
            () => {
                this.onTaskTypeSelected(this.taskTypeSelected);
            }
        );
    }

}
