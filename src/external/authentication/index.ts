import { JsonWebTokenInvalidError, AuthenticationProtocol } from "@/external";
import jsonWebToken, { JwtPayload } from "jsonwebtoken";
export class AuthenticationAdapter implements AuthenticationProtocol {

    private readonly jsonWebToken = jsonWebToken;


    decodeJsonWebToken(token: string): JwtPayload | JsonWebTokenInvalidError | any {
        try {
            return jsonWebToken.decode(token) as JwtPayload

        } catch {
            return new JsonWebTokenInvalidError();
        }
    }
}