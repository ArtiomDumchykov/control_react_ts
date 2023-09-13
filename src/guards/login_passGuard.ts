import { IAuth } from "type";

export const isAuthNoEmpty = (auth: IAuth): auth is { login: string; password: string } => auth.login !== "" || auth.password !== "";
