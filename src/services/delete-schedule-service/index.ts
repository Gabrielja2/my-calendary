import { API_BASE_URL } from "@/shared";
import { RestServicesProtocol } from "@/external";
import { DeleteScheduleServiceProtocol } from "./protocol";

export class DeleteScheduleService implements DeleteScheduleServiceProtocol {
    constructor(private readonly restService: RestServicesProtocol) { }


    async execute(id: string): Promise<string> {

        return await this.restService.delete(`${API_BASE_URL}/schedules/id/${id}`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`
            }
        });

    }
}
