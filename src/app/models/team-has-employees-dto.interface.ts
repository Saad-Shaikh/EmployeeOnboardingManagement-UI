import { EmployeeListDTO } from './employee-list-dto.interface';

export interface TeamHasEmployeesDTO {
    id: number;
    employeeListDTO: EmployeeListDTO
    startDate: Date;
    endDate: Date;
}
