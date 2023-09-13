import { IAuth, IUser } from '../type';
import { db_users } from '_db';
import { isAuthNoEmpty } from 'guards';


const authService = {
    async register(user: IAuth): Promise<IUser> {
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (isAuthNoEmpty(user)) {
                    resolve({...user, role: "user"})
                }
            }, 1500)
        })
    },

    async login (user: IAuth): Promise<IUser> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                    if (isAuthNoEmpty(user)) {
                        const userFind = db_users.find(item => item.login === user.login );
        
                        if (!userFind) {
                            reject("User not Found")
                        }
                        
                        if (userFind.password === user.password) {
                            console.log("TEST1")
                            resolve(userFind)
                           
                        } else {
                            console.log("TEST2")
                            throw new Error("Login or password no right")
                        } 
    
                    } else {
                        throw new Error("Login or password must be field!!!")
                    }
            }, 1500)
        })
    },

    async logOut(): Promise<null> {
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(null)
            }, 1000)
        })
    }
}

export {
    authService
}