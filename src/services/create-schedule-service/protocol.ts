export interface CreateScheduleServiceProtocol {
    execute(description: string, startDate: string, endDate: string): Promise<string>;
}