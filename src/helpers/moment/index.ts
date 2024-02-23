import { EventScheduleData } from "@/types";
import moment from 'moment-timezone'

export function formatScheduleResponse(schedules: EventScheduleData[]) {
    if (schedules.length > 0) {
        return schedules.map((schedule) => {
            return {
                ...schedule,
                start: moment(schedule.start).tz("America/Sao_Paulo").format("DD/MM/YYYY HH:mm"),
                end: moment(schedule.start).tz("America/Sao_Paulo").format("DD/MM/YYYY HH:mm"),
            };
        });
    }
    return []
}

export function formatScheduleRequest(start: string, end: string) {
    return {
        start: moment(start, "DD/MM/YYYY HH:mm")
            .utc()
            .format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),

        end: moment(end, "DD/MM/YYYY HH:mm")
            .utc()
            .format("YYYY-MM-DDTHH:mm:ss.SSS[Z]")
    }


}

