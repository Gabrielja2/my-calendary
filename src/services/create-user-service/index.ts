import { API_BASE_URL } from "@/shared";
import { RestServicesProtocol } from "@/external";
import { CreateUserServiceProtocol } from "./protocol";

export class CreateUserService implements CreateUserServiceProtocol {
    constructor(private readonly restService: RestServicesProtocol) { }

    async execute(username: string, email: string, password: string, confirmPassword: string): Promise<string> {
        {
            return await this.restService.post(`${API_BASE_URL}/users`, {
                username,
                email,
                password,
                confirmPassword,
            });
        }
    }
}
