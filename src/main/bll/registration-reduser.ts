import { authAPI } from "../dal/api/api-cards";
import { AppActionsType, AppThunk } from "./store";


export type SetRegisterDataAT = ReturnType<typeof setRegisterDataAC>
type InitialStateType = typeof initialState

const initialState = {
    isRegister: false
}


export const registerReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-REGISTER-DATA':
            return {
                ...state,
                isRegister: action.isRegister,
            }
        default:
            return state
    }
};

export const setRegisterDataAC = (isRegister: boolean) => ({ type: 'SET-REGISTER-DATA', isRegister } as const);


export const registerTC = (email: string, password: string): AppThunk => (dispatch) => {
    authAPI.registerUser(email, password)
        .then(res => {
            if (res.data.addedUser._id.length > 0) {
                dispatch(setRegisterDataAC(true))
            }
        })
        .catch(e => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            alert(error)
        })
}