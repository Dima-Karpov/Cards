import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { liginReduce, LoginActionType } from './login-reducer';
import { registerReducer, SetRegisterDataAT } from './registration-reduser';



const rootReducer = combineReducers({
    login: liginReduce,
    registretion: registerReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>


export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>

export type AppActionsType = LoginActionType
    | SetRegisterDataAT

// чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;