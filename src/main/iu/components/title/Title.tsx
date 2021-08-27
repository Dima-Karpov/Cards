import React from 'react';
import s from './Title.module.css'


type TitlePropsType = {
    title: string
    textStyle?: string
}


export const Title: React.FC<TitlePropsType> = React.memo((props) => {

    const {
        title
    } = props

    return (
        <h2 className={s.title}>
            {title}
        </h2>
    )
})