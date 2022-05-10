import { Component, Input, OnInit } from '@angular/core';

import { EmployeeDetailDTO } from './../../models/employee-detail-dto.interface';

@Component({
    selector: 'employee-detail',
    templateUrl: './employee-detail.component.html'
})
export class EmployeeDetailComponent implements OnInit {
    @Input()
    employee: EmployeeDetailDTO | null = null;

    constructor() { }

    ngOnInit(): void {
    }

}
