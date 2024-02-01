import axios from 'axios';
import { RestServicesProtocol, HttpAdapterProtocol } from '@/external';

export class RestServicesAdapter implements RestServicesProtocol {

    constructor(
        private readonly httpAdapter: HttpAdapterProtocol
    ) { }

    public async post<Type>(url: string, data?: object, headers?: object): Promise<Type> {
        try {

            const response = await axios.post(url, data, headers);

            return response.data;
        } catch (error: any) {
            return this.httpAdapter.response(error.response.status, error.response.data.message)
        }
    };

    public async get<Type>(url: string, headers?: object): Promise<Type> {
        try {

            const response = await axios.get(url, headers);

            return response.data;
        } catch (error: any) {
            return this.httpAdapter.response(error.response.status, error.response.data.message)
        }
    };

    public async put<Type>(url: string, data?: object, headers?: object): Promise<Type> {
        try {

            const response = await axios.put(url, data, headers);

            return response.data;
        } catch (error: any) {
            return this.httpAdapter.response(error.response.status, error.response.data.message)
        }
    };

    public async patch<Type>(url: string, data?: object, headers?: object): Promise<Type> {
        try {

            const response = await axios.patch(url, data, headers);

            return response.data;
        } catch (error: any) {
            return this.httpAdapter.response(error.response.status, error.response.data.message)
        }
    }

    public async delete<Type>(url: string, headers?: object): Promise<Type> {
        try {

            const response = await axios.delete(url, headers);

            return response.data;
        } catch (error: any) {
            return this.httpAdapter.response(error.response.status, error.response.data.message)
        }
    }
}