import { authAPI, ProfileResponseType } from "../dal/api/api-cards";
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

export const liginReduce = (state: InitialStateType = initialState, action: LoginActionType): InitialStateType => {
    switch (action.type) {
        case "SET-IS-LOGIN-IN": {
            return {
                ...state,
                profile: action.profile,
                isLoggedIn: action.isLoggedIn
            }
        }
        default: 
            return state
    }
};


export const loginAC = (profile: ProfileResponseType, isLoggedIn: boolean) => ({type: 'SET-IS-LOGIN-IN', profile, isLoggedIn} as const);

export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(res => {
            dispatch(loginAC(res.data, true))
        })
        .catch(e => {
            const error = e.response ? e.response.data.error : (`Login failed: ${e.message}.`)
            alert(error)
        })
}