import { HttpAdapter, RestServicesAdapter } from "@/external";
import { CreateScheduleService, CreateUserService, DeleteScheduleService, GetSchedulesByUserService, GetSchedulesService, LoginService, UpdateScheduleService } from "@/services";



export const httpAdapter = new HttpAdapter();

export const restAdapter = new RestServicesAdapter(httpAdapter);

export const loginService = new LoginService(restAdapter);

export const createUserService = new CreateUserService(restAdapter);

export const createScheduleService = new CreateScheduleService(restAdapter);

export const getSchedulesService = new GetSchedulesService(restAdapter);

export const getSchedulesByUserService = new GetSchedulesByUserService(restAdapter);

export const deleteScheduleService = new DeleteScheduleService(restAdapter);

export const updateScheduleService = new UpdateScheduleService(restAdapter);
