import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { EmployeeDetailDTO } from './../../models/employee-detail-dto.interface';

@Component({
    selector: 'employee-detail',
    templateUrl: './employee-detail.component.html',
    styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
    @Input()
    employee: EmployeeDetailDTO | null = null;

    @Output()
    viewOnboardingClicked: EventEmitter<void> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

}
