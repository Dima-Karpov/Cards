import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { liginReduce, LoginActionType } from './login-reducer';

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    login: liginReduce,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppStoreType = ReturnType<typeof rootReducer>



export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStoreType, unknown, AppActionsType>

export type AppActionsType = LoginActionType;

// чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;