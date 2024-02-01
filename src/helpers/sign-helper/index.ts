import { HandleSignHelperProtocol } from "./protocol";
import { LoginServiceProtocol } from "../../services/login-service/protocol";
import { ToastAdapterProtocol } from "@/external";

export class HandleSignHelper implements HandleSignHelperProtocol {
    constructor(
        private readonly loginService: LoginServiceProtocol,
        private readonly toastifyAdapter: ToastAdapterProtocol
    ) { }

    public execute = async (data: any) => {
        const result = await this.loginService.execute(
            data.email,
            data.password
        );

        if (typeof result === "string") {
            this.toastifyAdapter.toast(`Login realizado com sucesso! `, {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                type: "success",
            });

            localStorage.setItem("token", JSON.stringify(result));

            window.location.href = "/";
        } else {
            this.toastifyAdapter.toast(`${result['message']}`, {
                position: 'top-right',
                autoClose: 5000,
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
}
