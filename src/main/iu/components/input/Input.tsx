import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent}  from 'react';
import s from './Input.module.css';


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputPropsType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
    type?: string
}

export const Input: React.FC<InputPropsType> = React.memo((props) => {
    const {
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className,
        // type,
        ...restProps
    } = props

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange // если есть пропс onChange
        && onChange(e) // то передать ему е (поскольку onChange не обязателен)
        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);
        onEnter // если есть пропс onEnter
        && e.key === 'Enter' // и если нажата кнопка Enter
        && onEnter() // то вызвать его
    }

    const finalSpanClassName = `${s.error}`
    const finalInputClassName = `${s.errorInput} ${className? className: ""}`

    return (
        <>
            <input
                // type={type}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={s.input}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
           {/* {error && <span className={finalSpanClassName}>{error}</span>}*/}
        </>
    )
})