import { updateScheduleService, toastifyAdapter } from "@/factories";
import { EventScheduleData } from "@/types";
import { formatScheduleRequest } from "../moment";
import moment from "moment";

export const handleUpdate = async (fields: EventScheduleData) => {
    const { start, end } = formatScheduleRequest(fields.start, fields.end);

    const response = await updateScheduleService.execute(
        fields.id,
        fields.title,
        start,
        end
    );
    console.log("response", response);

    if (typeof response === "string") {
        toastifyAdapter.toast("Evento Atualizado com sucesso!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            type: "success",
        });
    } else {
        toastifyAdapter.toast(response["message"], {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            type: "error",
        });
    }
};
