import { Button } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom';
import { authActions } from 'reduxRTK/slices';

import { IAuth } from 'type';


export const LoginPage = () => {

    const dispatch = useAppDispatch();
    const {error} = useAppSelector(state => state.auth)

    const { state: redirect } = useLocation()

    const { register, reset, handleSubmit } = useForm<IAuth>({
        mode: 'onSubmit'
    })

    const login: SubmitHandler<IAuth> = async (user: IAuth) => {
        const {meta: {requestStatus}} = await dispatch(authActions.login({user}))

        console.log("requestStatus", requestStatus)

    }

    

    return (
        <div className='form-wrap'>
            <div className="form-wrap__container">
                <form 
                    onSubmit={handleSubmit(login)}
                    className="form__login"
                >
                    <div className="form__container">
                        <div className="form__fields">
                            <div className="field-wrap">
                                <label htmlFor="login" className="label-wrap">
                                    <span className="label__text">login</span>
                                    <input type="text" name='login' className="field"  placeholder='login' {...register("login")}/>
                                </label>
                            </div>
                            <div className="field-wrap">
                                <label htmlFor="password" className="label-wrap">
                                    <span className="label__text">password</span>
                                    <input type="text" name='password' className="field"  placeholder='password' {...register("password")}/>
                                </label>
                            </div>
                        </div>
                        <Button
                            type={"submit"}
                            classNameWrap={"submit-wrap-btns"}
                            classNameBtn={'submit-btn'}
                        >
                            login
                        </Button>
                        {error && <span className='errors'>{error.detail}</span>}
                    </div>
                </form>
            </div>
        </div>
    )
}
