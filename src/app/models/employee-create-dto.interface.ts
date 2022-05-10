import { EmployeeStatus } from './../enums/employee-status.enum';
import { EmployeeListDTO } from './employee-list-dto.interface';
import { Designation } from './../enums/designation.enum';

export interface EmployeeCreateDTO {
    name: string;
    dob: Date;
    address: string;
    phone: string;
    designation: Designation;
    onboardingStartDate: Date;
    onboardingEndDate: Date;
    mentoredBy: EmployeeListDTO[];
    status: EmployeeStatus;
}
