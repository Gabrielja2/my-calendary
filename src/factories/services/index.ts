import { HttpAdapter, RestServicesAdapter } from "@/external";
import { HandleSignHelper, HandleSignupHelper } from "@/helpers";
import { CreateUserService, LoginService } from "@/services";
import { toastifyAdapter } from "../external";

export const httpAdapter = new HttpAdapter();

export const restAdapter = new RestServicesAdapter(httpAdapter);

export const loginService = new LoginService(restAdapter);

export const createUserService = new CreateUserService(restAdapter);

export const handleSignInHelper = new HandleSignHelper(loginService, toastifyAdapter);

export const handleSignupHelper = new HandleSignupHelper(createUserService, toastifyAdapter);
