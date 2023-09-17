import { ReactNode } from "react"
interface IDescription {
    className_title?: string,
    className_sub_title?: string,
    text_title?: string
    text_sub_title?: string
    children?: ReactNode,
}

export const  Description = ({text_title, text_sub_title,className_title, className_sub_title, children}: IDescription) => {
    return (
        <div className={`movie-info-short-desctiption-field-wrap`}>
            {!!text_title && <span className={`short-description-field ${className_title}`}>{text_title}</span>}
            {!!text_sub_title && <span className={className_sub_title}>{text_sub_title}</span>}
            {children}
        </div>
    )
}