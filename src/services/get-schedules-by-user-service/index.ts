import { API_BASE_URL } from "@/shared";
import { RestServicesProtocol } from "@/external";
import { GetSchedulesByUserviceProtocol } from "./protocol";

type Schedule = {
    id: string;
    title: string;
    start: string;
    end: string;
};
export class GetSchedulesByUserService implements GetSchedulesByUserviceProtocol {
    constructor(private readonly restService: RestServicesProtocol) { }


    async execute(): Promise<Schedule[]> {
        {
            return await this.restService.get(`${API_BASE_URL}/schedules/user`, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`
                }
            });
        }
    }
}