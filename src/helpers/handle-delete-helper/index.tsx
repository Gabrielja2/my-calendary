import { deleteScheduleService, toastifyAdapter } from "@/factories";

export const handleDeleteHelper = async (id: string) => {
    if (confirm("Tem certeza que deseja remover o evento?")) {
        const response = await deleteScheduleService.execute(id);
        if (typeof response === "string") {
            toastifyAdapter.toast(response, {
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
    }
};
