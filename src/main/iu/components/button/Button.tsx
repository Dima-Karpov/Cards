import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './Button.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

export const Button: React.FC<SuperButtonPropsType> = React.memo(porps => {
    const  {
        red,
        className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    } = porps

    const finalClassName = `${s.button} ${red ? s.red : ''}`

    return (
        <button
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
})
   


