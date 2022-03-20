import { defineStore } from "pinia";
import { Users } from "../interfaces/interfaces";
import {router} from '../router/router';

export const useUsers = defineStore('users', {
    state: () => ({
        users: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users') as string) as Users[] : [] as Users[],
        isLogged: false,
        isOpenRegister: false,
        isOpenLogIn: false,
        firstNameError: false,
        lastNameError: false,
        userEmailError: false,
        displayNameError: false,
        passwordError: false,
        checked: false,
        checkedLogIn: false,
        type: "password",
        typeLogIn: "password",
        firstName: "",
        lastName: "",
        userEmail: "",
        displayName: "",
        password: "",
        userEmailLogIn: "",
        passwordLogIn: "",
        mailFormat: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    }),
    actions: {
        resetRegister(): void {
            this.firstNameError = false,
            this.lastNameError = false,
            this.userEmailError = false,
            this.displayNameError = false,
            this.passwordError = false,
            this.checked = false,
            this.checkedLogIn = false,
            this.type = "password",
            this.firstName = "",
            this.lastName = "",
            this.userEmail = "",
            this.displayName = "",
            this.password = "",
            this.isOpenRegister = false
        },
        resetLogIn(): void {
            this.typeLogIn = "password",
            this.userEmailLogIn = "",
            this.passwordLogIn = ""
            this.isOpenLogIn = false
        },
        addUser() {
            if (this.firstName.length > 0 && this.lastName.length > 0 && this.userEmail.length > 0 && this.displayName.length > 0 && this.password.length > 0 && !this.firstNameError && !this.lastNameError && !this.userEmailError && !this.displayNameError && !this.passwordError) {
     
                const userExists = this.users.find((user) => user.userEmail === this.userEmail);
                
                if (userExists) {
                    alert("This email is already registered.")
                } else {
                    const newUser: Users = {
                        firstName: this.firstName,
                        lastName: this.lastName,
                        userEmail: this.userEmail,
                        displayName: this.displayName,
                        password: this.password
                    }
                    this.users = [...this.users, newUser];
                    localStorage.setItem('users', JSON.stringify(this.users))
                    console.log('There are no errors you will be registered right away.');
                    this.isLogged = true;
                    router.push('/starships');
                    this.resetRegister()
                }
            } else {
                console.log('There are errors, fix them.');
            }
        },
        singInUser() {
            const userExists = this.users.find((user) => user.userEmail === this.userEmailLogIn);

            if (userExists) {
                if (this.passwordLogIn === userExists.password) {
                    console.log(`Correct user, welcome back ${userExists.firstName}`);
                    this.isOpenLogIn = false;
                    this.isLogged = true;
                    router.push('/starships');
                    this.resetLogIn()
                } else {
                    alert("Password is not correct.");
                }
            } else {
                alert("User not found.");
            }
        },
        logOut() {
            this.isOpenLogIn = false;
            this.isLogged = false;
            router.push('/');
        },
        openRegister() {
            this.isOpenLogIn = false;
            this.isOpenRegister = true;
        }
    }
})
