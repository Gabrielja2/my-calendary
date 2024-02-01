import { authenticationAdapter } from "@/factories";


export const getUser = () => {
    try {
        const token = JSON.parse(localStorage.getItem("token") as string);

        return authenticationAdapter.decodeJsonWebToken(token);
    } catch (error) {
        console.log(error);

    }
}

