import React, { ReactNode } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks';
import { Navigate, useLocation } from 'react-router-dom';


interface IAuthRequiredProps {
    children?: ReactNode
}

export const AuthRequired = ({children}: IAuthRequiredProps) => {
    
    const dispatch = useAppDispatch();
    const {user} = useAppSelector(state => state.auth)
    const {pathname} = useLocation()

   if (!user) {
    return <Navigate to={"/auth/login"} state={pathname}/>
   }
   
    return (
        <>
            {children}
        </>
    )
}
