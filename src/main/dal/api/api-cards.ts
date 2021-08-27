import axios from "axios"

export type ProfileResponseType = {
    token: string
    tokenDeathTime: number
    updated: string
    verified: boolean
    __v: number
    _id: string
    avatar: string
    created: string
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
};

export type RegistrationDataType ={
    email: string
    password: string
};
export type SignUpResponseType = {
    addedUser: ProfileResponseType //{}
    error?: string
};


const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})

export const authAPI = {
    login(email: string, password: string, rememberMe: boolean){
        return instance.post<ProfileResponseType>(`auth/login`, {email, password, rememberMe})
    },
    me(){
        return instance.post<ProfileResponseType>(`auth/me`, {})
    },
    registerUser(data: RegistrationDataType){
        return instance.post<SignUpResponseType>(`auth/register`, data)
    },
    passwordRecovery(email: string, from: string, message: {}){
        return instance.post(`auth/forgot`, {email, from, message})
    },
    newPassword(password: string, resetPasswordToken: {}) {
        return instance.post(`auth/set-new-password`, {
            password, resetPasswordToken
        })
    }
    
}