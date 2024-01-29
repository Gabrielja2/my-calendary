export interface CreateUserServiceProtocol {
    execute(name: string, email: string, password: string, confirmPassword: string): Promise<string>;
}