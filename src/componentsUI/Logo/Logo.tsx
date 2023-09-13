import { ReactNode } from "react"
import { NavLink } from "react-router-dom"

import './Logo.scss'

interface ILogoProps {
    to: string,
    img?: {
        src: string,
        alt: string
    }
    children?: ReactNode
}

export const Logo = ({to,img, children, }: ILogoProps) => {
    return (
        <NavLink 
            className="header__logo"
            to={to}
        >
            {!!img && (<img src={img.src} alt={img.alt}/>)}
            {!!children && children}
        </NavLink>
    )
}