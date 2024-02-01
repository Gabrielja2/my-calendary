export interface UpdateScheduleServiceProtocol {
    execute(id: string, description?: string, startDate?: string, endDate?: string): Promise<string>;
}