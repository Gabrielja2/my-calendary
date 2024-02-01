import { HandleLogoutHelper, HandleSignHelper, HandleSignupHelper, handleDelete, handleUpdate } from "@/helpers";
import { toastifyAdapter } from "../external";
import { createUserService, loginService } from "@/factories";

export const handleSignInHelper = new HandleSignHelper(loginService, toastifyAdapter);

export const handleSignupHelper = new HandleSignupHelper(createUserService, toastifyAdapter);

export const logoutHelper = new HandleLogoutHelper();

export const handleDeleteHelper = handleDelete;

export const handleUpdateHelper = handleUpdate;

