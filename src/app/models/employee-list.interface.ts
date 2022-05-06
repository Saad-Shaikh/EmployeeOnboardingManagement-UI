import { Designation } from './../enums/designation.enum';

export interface EmployeeList {
    id: number;
    name: string;
    designation: Designation;
}
