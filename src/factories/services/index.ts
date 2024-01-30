import { HttpAdapter, RestServicesAdapter } from "@/external";
import { CreateUserService, LoginService } from "@/services";


export const httpAdapter = new HttpAdapter();

export const restAdapter = new RestServicesAdapter(httpAdapter);

export const loginService = new LoginService(restAdapter);

export const createUserService = new CreateUserService(restAdapter);


