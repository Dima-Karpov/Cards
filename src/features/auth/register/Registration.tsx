import React from 'react';
import { Title } from '../../../main/iu/components/title/Title';
import s from './Registration.module.css';
import sInput from '../../../main/iu/components/input/Input.module.css';
import { Input } from '../../../main/iu/components/input/Input';
import { Button } from '../../../main/iu/components/button/Button';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { registerTC } from '../../../main/bll/registration-reduser';
import { AppRootStateType } from '../../../main/bll/store';
import { Redirect } from 'react-router-dom';

type FormikErrorType = {
    email?: string
    password?: string
    confirmPassword?: string
}

export const Registration: React.FC = React.memo(() => {

    const dispatch = useDispatch();
    const isRegistered = useSelector<AppRootStateType, boolean>(state => state.registretion.isRegister);

    const formik = useFormik({

        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
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
            if (values.password && !values.confirmPassword) {
                errors.confirmPassword = 'Confirm password';
            } else if (values.password !== values.confirmPassword) {
                errors.confirmPassword = 'Password mismatch';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(registerTC({ email: values.email, password: values.password }))
            formik.resetForm();
        },
    });

    if(isRegistered){
        // return <Redirect to={'login'}/>
    }

    return (
        <div className={s.modalWindow}>
            <Title title={'Sing Up'} />
            <form onSubmit={formik.handleSubmit}>
                <Input
                    className={sInput.input}
                    placeholder={'email'}
                    {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? <div style={{ color: 'red' }}>{formik.errors.email}</div> : null}
                <Input
                    className={sInput.input}
                    type='password'
                    placeholder={'password'}
                    {...formik.getFieldProps('password')}
                />
                {formik.touched.email && formik.errors.email ? <div style={{ color: 'red' }}>{formik.errors.password}</div> : null}
                <Input
                    className={sInput.input}
                    type='password'
                    placeholder={'confirm the password'}
                    {...formik.getFieldProps('confirmPassword')}
                />
                {formik.touched.email && formik.errors.email ? <div style={{ color: 'red' }}>{formik.errors.confirmPassword}</div> : null}

                <div className={s.button}>
                    <Button>Login</Button>
                </div>
            </form>
        </div>
    )
})