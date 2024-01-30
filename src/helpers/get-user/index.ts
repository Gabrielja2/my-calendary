import { authenticationAdapter } from "@/factories";

export class GetUser {
    public execute = () => {
        const token = JSON.parse(localStorage.getItem("token")!);

        const decodeBtoa = atob(token);

        return authenticationAdapter.decodeJsonWebToken(decodeBtoa);
    }
}