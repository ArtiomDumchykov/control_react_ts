import React, {ReactNode} from 'react'

import './Main.scss';

interface IMainProps  {
    children:ReactNode
}

export const Main = ({children}: IMainProps) => {
  return (
    <main className='main'>
        {children}
    </main>
  )
}
