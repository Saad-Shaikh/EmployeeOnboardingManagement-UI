import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { EmployeeListDTO } from '../../models/employee-list-dto.interface';

@Component({
    selector: 'employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
    @Input()
    employeeList: EmployeeListDTO[] = [];

    @Output()
    employeeSelected: EventEmitter<number> = new EventEmitter();
    @Output()
    createClicked: EventEmitter<void> = new EventEmitter();

    constructor() {
    }

    ngOnInit(): void {
    }

}
