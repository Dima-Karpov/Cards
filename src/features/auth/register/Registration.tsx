import React from 'react';
import { Title } from '../../../main/iu/components/title/Title';
import s from './Registration.module.css';
import sInput from '../../../main/iu/components/input/Input.module.css';
import { Input } from '../../../main/iu/components/input/Input';
import { Button } from '../../../main/iu/components/button/Button';



export const Registration: React.FC = React.memo(() => {
    return (
        <div className={s.modalWindow}>
            <Title title={'Sing Up'} />
            <form className={s.input}>
                <Input
                    className={sInput.input}
                    placeholder={'email'}
                />
                <Input
                    className={sInput.input}
                    type='password'
                    placeholder={'password'}
                />
                <Input
                    className={sInput.input}
                    type='password'
                    placeholder={'confirm the password'}
                />

                <div className={s.button}>
                    <Button>Login</Button>
                </div>
            </form>
        </div>
    )
})