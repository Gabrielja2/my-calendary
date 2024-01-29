export interface RestServicesProtocol {
    post<Type>(url: string, data?: object, config?: object): Promise<Type>;
    get<Type>(url: string, config?: object): Promise<Type>;
    put<Type>(url: string, data?: object, config?: object): Promise<Type>;
    patch<Type>(url: string, data?: object, config?: object): Promise<Type>;
    del<Type>(url: string, config?: object): Promise<Type>;
}