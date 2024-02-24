"use client";

import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import timeGridPlugin from "@fullcalendar/timegrid";
import {
    createScheduleService,
    deleteScheduleService,
    getSchedulesService,
    updateScheduleService,
} from "@/factories";
import { getUser } from "@/helpers";

export default function Calendar() {
    function renderEventContent(eventInfo: any) {
        const userId = eventInfo.event.extendedProps.userId;
        const loggedUser = getUser();

        if (userId !== loggedUser.id) {
            return (
                <div>
                    <b className="flex justify-center">{"Cheio"}</b>
                </div>
            );
        }
        return (
            <div className="flex justify-center">
                <b>{eventInfo.timeText}</b>
            </div>
        );
    }

    const handleEventClick = async (clickInfo: any) => {
        if (
            confirm(
                `Tem certeza que deseja remover o evento '${clickInfo.event.title}'`
            )
        ) {
            const response = await deleteScheduleService.execute(
                clickInfo.event.id
            );

            if (typeof response === "string") {
                clickInfo.event.remove();
                alert(`Evento: "${response}" removido com sucesso!`);
            } else {
                alert(response["message"]);
            }
        }
    };

    const handleInitialEvents = async () => {
        const events = await getSchedulesService.execute();
        events.map((event: any) => {
            return {
                id: event.id,
                title: event.title,
                start: event.start,
                end: event.end,
                userId: event.userId,
            };
        });

        return events;
    };

    const handleDateSelect = async (selectInfo: any) => {
        let calendarApi = selectInfo.view.calendar;
        let title = prompt("Digite um nome para este evento:");

        calendarApi.unselect();

        if (title) {
            const newEvent = calendarApi.addEvent({
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay,
            });

            const data = {
                title: newEvent.title,
                start: newEvent.startStr,
                end: newEvent.endStr,
            };
            console.log("data", data);

            const response = await createScheduleService.execute(
                data.title,
                data.start,
                data.end
            );
            if (typeof response === "string") {
                alert(`Evento: "${response}" criado com sucesso!`);
            } else {
                alert(response["message"]);
                newEvent.remove();
            }
        }
    };

    const handleEventChange = async (changeInfo: any) => {
        const response = await updateScheduleService.execute(
            changeInfo.event.id,
            changeInfo.event.title,
            changeInfo.event.startStr,
            changeInfo.event.endStr
        );

        if (typeof response === "string") {
            alert(`Evento: "${response}" atualizado com sucesso!`);
        } else {
            alert(response["message"]);
        }
    };

    return (
        <div className="sm:w-1/2 m-auto sm:h-screen py-12">
            <FullCalendar
                schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
                plugins={[
                    resourceTimelinePlugin,
                    interactionPlugin,
                    timeGridPlugin,
                ]}
                headerToolbar={{
                    right: "prev,next today",
                    center: "title",
                    left: "timeGridWeek",
                }}
                initialView="timeGridWeek"
                nowIndicator={true}
                editable={true}
                selectable={true}
                select={handleDateSelect}
                selectMirror={true}
                eventContent={renderEventContent}
                eventClick={handleEventClick}
                eventChange={handleEventChange}
                initialEvents={(
                    fetchInfo,
                    successCallback,
                    failureCallback
                ) => {
                    handleInitialEvents()
                        .then((events) => {
                            const coloredEvents = events.map((event: any) => {
                                return {
                                    ...event,
                                    color:
                                        event.userId === getUser().id
                                            ? "#3788D8"
                                            : "#e74d3d",
                                };
                            });
                            successCallback(coloredEvents);
                        })
                        .catch((error) => {
                            failureCallback(error);
                        });
                }}
                locale={"pt-br"}
            />
        </div>
    );
}
