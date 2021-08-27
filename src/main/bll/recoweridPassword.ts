import { ThunkAction } from "redux-thunk"
import { authAPI } from "../dal/api/api-cards"
import { AppActionsType, AppRootStateType, AppThunk } from "./store"

// types
export type RestorePasswordReducerActionsType = ReturnType<typeof setErrorMessageAC>
    | ReturnType<typeof setStatusSendingMessage>

type InitialStateType = {
    errorMessage: string | null
    isRecovered: boolean
}
const initialState = {
    errorMessage: null,
    isRecovered: false

}



export const restorePasswordReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-STATUS-SENDING-MESSAGE':
            return { ...state, isRecovered: action.isRecovered }
        default:
            return state
    }
};

// actions
export const setErrorMessageAC = (errorMessage: string) => (
    { type: 'SET-ERROR-MESSAGE', errorMessage } as const);
export const setStatusSendingMessage = (isRecovered: boolean) => ({ type: 'SET-STATUS-SENDING-MESSAGE', isRecovered } as const);
// thunks
export const restorePasswordTC = (email: string, from: string, message: {}): AppThunk =>
    async (dispatch) => {
        try {
            await authAPI.passwordRecovery(email, from, message)
            dispatch(setStatusSendingMessage(true))
        } catch (e) {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            alert(error)
        } finally {
            // some code...
        }
    };

