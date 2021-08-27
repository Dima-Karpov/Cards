import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import s from "./PasswordRecowery.module.css";
import sInput from '../../../main/iu/components/input/Input.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from "formik";
import { AppRootStateType } from '../../../main/bll/store';
import { restorePasswordTC } from '../../../main/bll/recoweridPassword';
import { Input } from '../../../main/iu/components/input/Input';
import { Button } from '../../../main/iu/components/button/Button';

type FormikErrorType = {
    email?: string
}

export const PasswordRecovery = React.memo(() => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn);
    const recovered = useSelector<AppRootStateType, boolean>(state => state.recovery.isRecovered);
    // const status = useSelector<AppRootStateType, RequestStatusType>(state => state.appReducer.status)
    const dispatch = useDispatch();


    const from = "test-front-admin <ai73a@yandex.by>"
    const message =
        `<div>
                Please, click on the link and enter a new password
            <a href='https://hrudkouski.github.io/cards/#/new-password/$token$'>Go to recovery password</a> 
        </div>`;


    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validate: (values) => {

            const error: FormikErrorType = {}
            if (!values.email) {
                error.email = "Required"
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                error.email = "Invalid email address"
            }
            return error
        },
        onSubmit: values => {
            dispatch(restorePasswordTC(values.email, from, message))
            formik.resetForm()
        }
    })

    if (recovered) {
        // return <Redirect to={"/password-change"} />
    }

    if (isLoggedIn) {
        // return <Redirect to={"/"} />
    }

    return (
        <div className={s.container}>
            <form onSubmit={formik.handleSubmit}>
                <div className={s.block}>
                    <MainTitle title={"It-Incubator"} />
                    <h4 >Forgot your password?</h4>
                    <div className={s.inputWrap}>
                        <Input
                            className={sInput.input}
                            placeholder={'email'}
                            {...formik.getFieldProps('email')}
                            autoComplete="off"
                        />
                        {formik.touched.email && formik.errors.email
                            ? <div>{formik.errors.email}</div>
                            : <div>&nbsp;</div>
                        }
                    </div>
                    <p className={s.instruction}>
                        Enter your email address and we will send you further instructions
                    </p>
                    <Button
                        type={"submit"}
                        // disabled={status === "loading"}
                        className={s.button}
                    >
                        Send Instructions
                    </Button>
                    <div className={s.blokLink}>
                        <span className={s.question}>Did you remember your password?</span>
                        <NavLink to={"/login"} ><span className={s.link}>Try logging in</span></NavLink>
                    </div>
                </div>
            </form>
        </div>
    )
})

type MainTitlePropsType = {
    title: string
    textStyle?: string
}

export const MainTitle = React.memo((props: MainTitlePropsType) => {
    return (
        <h2 className={s.titleT}>
            {props.title}
        </h2>
    )
});