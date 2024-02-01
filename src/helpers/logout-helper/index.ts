import { HandleLogoutHelperProtocol } from "./protocol";


export class HandleLogoutHelper implements HandleLogoutHelperProtocol {

    public execute = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";

    }
}
