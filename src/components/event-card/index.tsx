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
import { EventScheduleData } from "@/types";
import { useState } from "react";

type EventCardProps = {
    onClickDelete: (id: string) => void;
    onClickEdit: (fields: EventScheduleData) => void;
} & EventScheduleData;

export function EventCard(props: EventCardProps) {
    const { id, title, start, end, onClickDelete, onClickEdit } = props;
    const [isEditing, setIsEditing] = useState(false);
    const [fields, setFields] = useState({
        id,
        title,
        start,
        end,
    });

    const handleChangeInput = (field: string) => (e: any) => {
        setFields((oldState) => ({
            ...oldState,
            [field]: e.target.value,
        }));
    };

    return (
        <Card className="w-[350px] h-[400px] m-4">
            <CardHeader>
                <CardTitle>Evento</CardTitle>
                <CardDescription>{props.id}</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="title">Titulo</Label>
                            <Input
                                id="title"
                                placeholder="Titulo do evento"
                                value={fields.title}
                                onChange={handleChangeInput("title")}
                                disabled={isEditing ? false : true}
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="start">Início</Label>
                            <Input
                                id="start"
                                placeholder="Inicio do evento"
                                value={fields.start}
                                onChange={handleChangeInput("start")}
                                disabled={isEditing ? false : true}
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="end">Término</Label>
                            <Input
                                id="end"
                                placeholder="Término do evento"
                                value={fields.end}
                                onChange={handleChangeInput("end")}
                                disabled={isEditing ? false : true}
                            />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between gap-2">
                <Button
                    onClick={() => {
                        if (isEditing) {
                            setIsEditing(false);
                        } else {
                            onClickDelete(id);
                        }
                    }}
                    className="hover:bg-[#f8432ed1] hover:shadow-sm rounded w-1/2 py-2 px-2 bg-[--bg-btn-rosa] text-white font-bold focus:outline-none disabled:opacity-70"
                >
                    {isEditing ? "Cancelar" : "Deletar"}
                </Button>
                <Button
                    onClick={() => {
                        if (isEditing) {
                            onClickEdit(fields);
                            setIsEditing(false);
                        } else {
                            setIsEditing(true);
                        }
                    }}
                    className="hover:bg-[#f8432ed1] hover:shadow-sm rounded w-1/2 py-2 px-2 bg-[--bg-btn-rosa] text-white font-bold focus:outline-none disabled:opacity-70"
                >
                    {isEditing ? "Salvar" : "Editar"}
                </Button>
            </CardFooter>
        </Card>
    );
}
