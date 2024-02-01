"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import moment from "moment";
import { handleDeleteHelper } from "@/helpers";

type ScheduleData = {
    id: string;
    title: string;
    start: string;
    end: string;
};
export function EventCard(schedule: ScheduleData) {
    const handleDelete = handleDeleteHelper;

    return (
        <Card className="sm:w-[20%] sm:h-[65%]">
            <CardHeader>
                <CardTitle>Evento</CardTitle>
                <CardDescription>{schedule.id}</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="title">Titulo</Label>
                            <Input
                                id="title"
                                placeholder="Titulo do evento"
                                value={schedule?.title}
                                readOnly
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="start">Início</Label>
                            <Input
                                id="start"
                                placeholder="Inicio do evento"
                                value={moment(schedule?.start).format(
                                    "DD/MM/YYYY:HH:mm"
                                )}
                                readOnly
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="end">Término</Label>
                            <Input
                                id="end"
                                placeholder="Término do evento"
                                value={moment(schedule?.end).format(
                                    "DD/MM/YYYY:HH:mm"
                                )}
                                readOnly
                            />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between gap-2">
                <Button
                    onClick={() => handleDelete(schedule.id)}
                    className="hover:bg-[#f8432ed1] hover:shadow-sm rounded w-full py-2 px-2 bg-[--bg-btn-rosa] text-white font-bold focus:outline-none disabled:opacity-70"
                >
                    Cancelar Evento
                </Button>
            </CardFooter>
        </Card>
    );
}
