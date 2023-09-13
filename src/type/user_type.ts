export type IRole = "user" | "admin"

export interface IUser {
    id?: number,
    login: string,
    password: string, 
    role: IRole
}