import { API_BASE_URL } from "@/shared";
import { RestServicesProtocol } from "@/external";
import { UpdateScheduleServiceProtocol } from "./protocol";

export class UpdateScheduleService implements UpdateScheduleServiceProtocol {
    constructor(private readonly restService: RestServicesProtocol) { }


    async execute(id: string, title: string, start: string, end: string): Promise<string> {

        {
            return await this.restService.patch(`${API_BASE_URL}/schedules/id/${id}`, {
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
