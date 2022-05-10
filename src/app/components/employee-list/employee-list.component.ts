import { Designation } from './../../enums/designation.enum';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { EmployeeListDTO } from '../../models/employee-list-dto.interface';

@Component({
    selector: 'employee-list',
    templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
    @Input()
    employeeList: EmployeeListDTO[] = [];
    public designation = Designation;

    @Output()
    employeeSelected: EventEmitter<number> = new EventEmitter();

    constructor() {
    }

    ngOnInit(): void {
    }

    onEmployeeSelected(id: number): void {
        this.employeeSelected.emit(id);
    }

}
