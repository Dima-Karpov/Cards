import { loginApi, ProfileResponseType } from "../dal/api/api-cards";
import { AppThunk } from "./store";

type InitialStateType = typeof initialState;

export type LoginActionType = ReturnType<typeof loginAC>

const initialState = {
    profile: {
        avatar: '',
        created: '',
        email: '',
        isAdmin: false,
        name: '',
        publicCardPacksCount: 0,
        rememberMe: false,
        token: '',
        tokenDeathTime: 0,
        updated: '',
        verified: false,
        __v: 0,
        _id: ''
    } || null,
    isLoggedIn: false,
}

export const liginReduce = (state: InitialStateType = initialState, action: LoginActionType): any => {
    switch (action.type) {
        case "SET-IS-LOGIN-IN": {
            return {
                ... state,
                profile: action.profile,
                isLogeedIn: action.isLoggenIn
            }
        }
    }
};


export const loginAC = (profile: ProfileResponseType, isLoggenIn: boolean) => ({type: 'SET-IS-LOGIN-IN', profile, isLoggenIn} as const);

export const loginAT = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch) => {
    loginApi.login(email, password, rememberMe)
        .then(res => {
            dispatch(loginAC(res.data, true))
        })
        .catch(error => {
            alert(error.message)
        })
}