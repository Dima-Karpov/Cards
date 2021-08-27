import React from 'react';
import { Input } from '../../../main/iu/components/input/Input';
import { Title } from '../../../main/iu/components/title/Title';
import s from './Login.module.css'
import sInput from '../../../main/iu/components/input/Input.module.css'
import { Checkbox } from '../../../main/iu/components/checkbox/Checkbox';
import { Button } from '../../../main/iu/components/button/Button';
import { NavLink } from 'react-router-dom';
import { PATH } from '../../../main/iu/routes/Routes';



export const Login = React.memo(() => {
    return (
        <div className={s.modalWindow}>
            <Title title='Sign In' />
            <span className={s.phrase}>Please fill in the form below</span>
            <form className={s.input}>
                <Input
                    className={sInput.input}
                    type='email'
                />
                <Input
                    className={sInput.input}
                    type='password'
                />
                <div className={s.cehckbox}>
                    <label htmlFor="rememberMe">Remember me</label>
                    <Checkbox
                        name="rememberMe"
                    />
                </div>
                <div className={s.button}>
                    <Button>Login</Button>
                </div>
                <div className={s.navlink}>
                    <a style={{ color: "#232480", fontWeight: "bold", textDecoration: "none" }}>Forgot your password?
                    </a>

                    <div className={s.navlink}>
                        <a style={{ color: "#232480", fontWeight: "bold", textDecoration: "none" }}>Sign
                            Up</a>
                    </div>

                </div>

            </form>
        </div>
    )
})