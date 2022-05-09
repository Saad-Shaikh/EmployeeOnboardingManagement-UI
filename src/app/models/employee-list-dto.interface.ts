import { Designation } from '../enums/designation.enum';

export interface EmployeeListDTO {
    id: number;
    name: string;
    designation: Designation;
}
