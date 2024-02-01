"use client";

import { API_BASE_URL } from "@/shared";
import { useEffect, useState } from "react";
import {
    getSchedulesByUserService,
    getSchedulesService,
    restAdapter,
    toastifyAdapter,
} from "@/factories";
import { EventCard } from "..";
import Link from "next/link";

export function EventsCards() {
    const [schedules, setSchedules] = useState<ScheduleData[]>([]);

    type ScheduleData = {
        id: string;
        title: string;
        start: string;
        end: string;
    };

    useEffect(() => {
        const schedules = getSchedulesByUserService
            .execute()
            .then((res) => setSchedules(res));
    }, []);

    const renderSchedulesMap = (schedules: ScheduleData[]) => {
        return schedules.map((schedule, index) => {
            return (
                <EventCard
                    key={index}
                    id={schedule.id}
                    title={schedule.title}
                    start={schedule.start}
                    end={schedule.end}
                />
            );
        });
    };

    return (
        <div className="flex flex-wrap gap-8 justify-center h-screen overflow-x-auto my-8">
            {schedules.length > 0 ? (
                renderSchedulesMap(schedules)
            ) : (
                <div className="flex m-auto text-3xl text-[--text-dark] gap-4">
                    Você ainda não possui eventos. Crie agora mesmo{" "}
                    <Link className="text-[--bg-btn-rosa]" href="/">
                        Aqui.
                    </Link>
                </div>
            )}
            {toastifyAdapter.toastContainer({})}
        </div>
    );
}
