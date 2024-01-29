import { InvalidParamError, NotFoundError, UnauthorizedError } from "@/external/errors";
import { HttpAdapterProtocol } from "./http-protocol";

export class HttpAdapter implements HttpAdapterProtocol {

    public response(statusCode: number, message: string) {
        let error = null;

        switch (statusCode) {
            case 400:
                error = new InvalidParamError(message);
                break;
            case 401:
                error = new UnauthorizedError(message);
                break;
            case 404:
                error = new NotFoundError(message);
                break;
        }

        return error;

    }
}