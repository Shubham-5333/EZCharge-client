export interface IUserLoginCredentials {
    email: string;
    password: string;
}

export interface IUserRegisterCredentials {
    name: string,
    // phoneNumber: string,
    email: string,
    password: string,
    confirmPassword: string
}