import { NavLink } from "react-router-dom";

import './NavItem.scss';

import { INavLinks } from "../NavList/NavList";
interface INavItemProps {
    item: INavLinks
}

export const NavItem = ({item: {linkName, redirect}}: INavItemProps) => {
    return (
        <li 
            className='header-nav__item item-nav'
        >   
            <NavLink 
                className="header-nav__item-link link-item-nav"
                to={redirect || ''}
            >
                <span 
                    className="header-nav-item-link__text text-link-item"
                >
                    {linkName}
                </span>
                <span className="span-line"></span>
            </NavLink>
        </li>
    )
}