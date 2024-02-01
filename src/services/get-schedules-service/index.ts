import { API_BASE_URL, JWT_TOKEN } from "@/shared";
import { RestServicesProtocol } from "@/external";
import { GetSchedulesServiceProtocol } from "./protocol";

export class GetSchedulesService implements GetSchedulesServiceProtocol {
    constructor(private readonly restService: RestServicesProtocol) { }


    async execute(): Promise<any> {
        {
            return await this.restService.get(`${API_BASE_URL}/schedules`, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`
                }
            });
        }
    }
}
