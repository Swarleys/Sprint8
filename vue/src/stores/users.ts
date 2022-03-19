import { defineStore } from "pinia";
import { Users } from "../interfaces/interfaces";

export const useUsers = defineStore('users', {
    state: () => ({
        users: [] as Users[],
        isLogged: false,
        isOpenRegister: false,
        isOpenLogin: false,
    }),
    actions: { 
       addUser(email: string, password: string): void {
        this.users = [{email,password}, ...this.users];
       }
    }
})
