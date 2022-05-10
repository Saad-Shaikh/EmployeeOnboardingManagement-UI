import { Designation } from '../enums/designation.enum';
import { EmployeeListDTO } from './employee-list-dto.interface';
import { EmployeeStatus } from '../enums/employee-status.enum';

export interface EmployeeDetailDTO {
    id: number;
    name: string;
    dob: Date;
    address: string;
    phone: string;
    designation: Designation;
    onboardingStartDate: Date;
    onboardingEndDate: Date;
    mentors: EmployeeListDTO[];
    status: EmployeeStatus;
}
