export interface DeleteScheduleServiceProtocol {
    execute(id: string): Promise<string>;
}