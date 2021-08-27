import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'



export const Header: React.FC = React.memo(() => {
    return (
        <div className={s.header}>
            <div>
                <NavLink
                    className={s.link}
                    activeClassName={s.activeLink}
                    to={'/register'}>Sign up
                </NavLink>
                <NavLink
                    className={s.link}
                    activeClassName={s.activeLink}
                    to={'/login'}>Sign un
                </NavLink>
                <NavLink
                    className={s.link}
                    activeClassName={s.activeLink}
                    to={'/profile'}>Profile
                </NavLink>
                <NavLink
                    className={s.link}
                    activeClassName={s.activeLink}
                    to={'/packList'}>Packs list
                </NavLink>
            </div>
        </div>
    )
})