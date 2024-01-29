export interface LoginServiceProtocol {
    execute(email: string, password: string): Promise<string>;
}