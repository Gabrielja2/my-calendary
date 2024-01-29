import { JsonWebTokenInvalidError } from "./error";
import { JsonWebTokenType } from "./type";

export interface AuthenticationProtocol {
    decodeJsonWebToken(token: string): JsonWebTokenType | JsonWebTokenInvalidError;
}