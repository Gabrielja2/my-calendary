"use client";

import { useCallback, useEffect, useState } from "react";
import {
    getSchedulesByUserService,
    toastifyAdapter,
    handleDeleteHelper,
    handleUpdateHelper,
} from "@/factories";
import { EventCard } from "..";
import Link from "next/link";
import { formatScheduleResponse } from "@/helpers";
import { EventScheduleData } from "@/types";

export function EventsCards() {
    const [schedules, setSchedules] = useState<EventScheduleData[]>([]);

    const fetchSchedules = useCallback(async () => {
        const schedules = await getSchedulesByUserService.execute();
        setSchedules(formatScheduleResponse(schedules));
    }, []);

    const handleDeleteEvent = useCallback(async (id: string) => {
        await handleDeleteHelper(id);
        await fetchSchedules();
    }, []);

    const handleUpdateEvent = useCallback(async (fields: EventScheduleData) => {
        await handleUpdateHelper(fields);
        await fetchSchedules();
    }, []);

    useEffect(() => {
        console.count("effect");
        fetchSchedules();
    }, [fetchSchedules]);

    const renderSchedulesMap = (schedules: EventScheduleData[]) => {
        return schedules.map((schedule, index) => {
            return (
                <EventCard
                    key={index}
                    id={schedule.id}
                    title={schedule.title}
                    start={schedule.start}
                    end={schedule.end}
                    onClickDelete={handleDeleteEvent}
                    onClickEdit={async (fields) => {
                        handleUpdateEvent(fields);
                    }}
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
