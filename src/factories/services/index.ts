import { HttpAdapter, RestServicesAdapter } from "@/external";
import { GenerateAvatarService, HandleSignHelper, HandleSignupHelper, RecoveryPasswordHelper } from "@/helpers";
import { CreateUserService, LoginService, RecoveryPasswordService } from "@/services";
import { toastifyAdapter } from "../external";

export const httpAdapter = new HttpAdapter();

export const restAdapter = new RestServicesAdapter(httpAdapter);

export const loginService = new LoginService(restAdapter);

export const createUserService = new CreateUserService(restAdapter);

export const handleSignInHelper = new HandleSignHelper(loginService, toastifyAdapter);

export const handleSignupHelper = new HandleSignupHelper(createUserService, toastifyAdapter);

export const createGoogleAvatarLink = new GenerateAvatarService();

export const recoveryPasswordService = new RecoveryPasswordService(restAdapter);

export const recoveryPasswordHelper = new RecoveryPasswordHelper(recoveryPasswordService, toastifyAdapter);
