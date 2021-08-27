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
}


const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})

debugger
export const loginApi = {
  
    login(email: string, password: string, rememberMe: boolean){
        return instance.post<ProfileResponseType>(`auth/login`, {email, password, rememberMe})
    }
}