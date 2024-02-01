import { ToastAdapterProtocol } from "@/external";
import { HandleSignupHelperProtocol } from "./protocol";
import { CreateUserServiceProtocol } from "@/services";

export class HandleSignupHelper implements HandleSignupHelperProtocol {
    constructor(
        private readonly createUserService: CreateUserServiceProtocol,
        private readonly toastifyAdapter: ToastAdapterProtocol
    ) { }

    public execute = async (data: any) => {
        const result = await this.createUserService.execute(
            data.username,
            data.email,
            data.password,
            data.confirmPassword
        )

        if (typeof result === "string") {
            this.toastifyAdapter.toast(`Usuário criado com sucesso! `, {
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

            window.location.href = "/login";
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
