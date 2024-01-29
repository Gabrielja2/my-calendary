import { API_BASE_URL } from "@/shared";
import { RestServicesProtocol } from "@/external";
import { LoginServiceProtocol } from "./protocol";

export class LoginService implements LoginServiceProtocol {
    constructor(private readonly restService: RestServicesProtocol) { }

    async execute(email: string, password: string): Promise<string> {
        {
            return await this.restService.post(`${API_BASE_URL}/users/login`, {
                email,
                password,
            });
        }
    }
}
