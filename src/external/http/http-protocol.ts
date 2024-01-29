export interface HttpAdapterProtocol {
    response(statusCode: number, message: string): any;
}