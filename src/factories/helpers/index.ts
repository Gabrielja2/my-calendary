import { GetUser, HandleSignHelper, HandleSignupHelper } from "@/helpers";
import { toastifyAdapter } from "../external";
import { createUserService, loginService } from "@/factories";

export const handleSignInHelper = new HandleSignHelper(loginService, toastifyAdapter);

export const handleSignupHelper = new HandleSignupHelper(createUserService, toastifyAdapter);

export const getUSer = new GetUser();

