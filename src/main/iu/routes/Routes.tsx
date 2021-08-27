import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Login } from '../../../features/auth/login/Login';

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/register',
    PROFILE: '/profile',
    RECOVERY_PASSWORD: '/recovery',
    NEW_PASSWORD: '/new-password',
    PACKS_LIST: '/packList',
    CARDS: '/cards',
    LEARN: '/learn',
    TEST: '/test',
    ERROR_404: '/404',
    UNKNOWN_PAGE: '*',
}


export const Routes = React.memo(() => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} render={() => <Redirect to={PATH.LOGIN}/>}/>
                <Route path={PATH.LOGIN} render={() => <Login/>}/>
            </Switch>
        </>
    )
})