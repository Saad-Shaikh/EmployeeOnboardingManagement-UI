export interface OnboardingTaskUpdateDTO {
    id?: number;
    employeeId?: number;
    remarks: string;
    startDate: Date;
    endDate: Date;
    links: string;
    status: string;
}
