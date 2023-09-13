import React, { ButtonHTMLAttributes, CSSProperties, FC, PropsWithChildren } from 'react'

interface IProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
    classNameWrap?: string,
    classNameBtn?: string,
    styleWrap?: CSSProperties,
    styleBtn?: CSSProperties,

}

export const  Button:FC<IProps> = ({ type, classNameWrap, classNameBtn, styleWrap, styleBtn, children, ...rest}) => {

    return (
        <div className={classNameWrap} style={styleWrap}>
            <button
                type={type}
                className={classNameBtn}
                style={styleBtn}
                {...rest}
            >
                {children}
            </button>
        </div>
    )
}
