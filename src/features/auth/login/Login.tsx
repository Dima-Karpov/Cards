import React from 'react';
import { Input } from '../../../main/iu/components/input/Input';
import { Title } from '../../../main/iu/components/title/Title';
import s from './Login.module.css'
import sInput from '../../../main/iu/components/input/Input.module.css'
import { Checkbox } from '../../../main/iu/components/checkbox/Checkbox';
import { Button } from '../../../main/iu/components/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../../../main/bll/store';
import { useFormik } from 'formik';
import { loginTC } from '../../../main/bll/login-reducer';

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = React.memo(() => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Incorrect password'
            } else if (values.password.length < 3) {
                errors.password = 'Please enter your password'
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(loginTC(values.email, values.password, values.rememberMe))
            formik.resetForm()
        },

    })

        if(isLoggedIn){
            // return
        }


    return (
        <div className={s.modalWindow}>
            <Title title='Sign In' />
            <span className={s.phrase}>Please fill in the form below</span>
            <form className={s.input} onSubmit={formik.handleSubmit}>
                <Input
                    className={sInput.input}
                    {...formik.getFieldProps('email')}
                />
                 {formik.touched.email && formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                <Input
                    className={sInput.input}
                    type='password'
                    {...formik.getFieldProps('password')}
                />
                 {formik.touched.password && formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
                <div className={s.cehckbox}>
                    <label htmlFor='rememberMe'>Remember me</label>
                    <Checkbox
                        name='rememberMe'
                        onChange={formik.handleChange}
                        checked={formik.values.rememberMe}
                    />
                </div>
                <div className={s.button}>
                    <Button>Login</Button>
                </div>
                <div className={s.navlink}>
                    <a style={{ color: '#232480', fontWeight: 'bold', textDecoration: 'none' }}>Forgot your password?</a>

                    <div className={s.navlink}>
                        <a style={{ color: '#232480', fontWeight: 'bold', textDecoration: 'none' }}>Sign Up</a>
                    </div>

                </div>

            </form>
        </div>
    )
})