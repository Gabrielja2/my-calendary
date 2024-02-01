import { API_BASE_URL, JWT_TOKEN } from "@/shared";
import { RestServicesProtocol } from "@/external";
import { CreateScheduleServiceProtocol } from "./protocol";

export class CreateScheduleService implements CreateScheduleServiceProtocol {
    constructor(private readonly restService: RestServicesProtocol) { }


    async execute(title: string, start: string, end: string): Promise<string> {

        {
            return await this.restService.post(`${API_BASE_URL}/schedules`, {
                title,
                start,
                end
            }, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`
                }
            });
        }
    }
}
