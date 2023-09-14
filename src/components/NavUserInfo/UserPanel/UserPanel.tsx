// // UserPanel.jsx
// import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';

// import { ROUTES } from '../../../routes';
// import { Context } from '../../../HOC';
// import { Theme } from '../../../components_UI';

// export const UserPanel = () => {

//     const { authContext: { isLogin }, handleLogOut } = useContext(Context)

//     const navigate = useNavigate()

//     const handleIn = () => {
//         navigate(ROUTES.LOGIN)
//     }

//     const handleExit = () => {
//         handleLogOut();
//         navigate(ROUTES.MAIN)
//     }

//     return (
//         <div className="panel">
//             <ul className='panel__list'>
//                 <li
//                     className='panel-user__item'
//                     onClick={() => navigate(ROUTES.FAVORITE)}
//                 >
//                     Favorite
//                 </li>
//                 <li className='panel-user__item'><Theme /></li>
//                 <li
//                     className='panel-user__item panel-user-exit'
//                     onClick={!isLogin ? handleIn : handleExit}
//                 >
//                     {!isLogin ? "LogIn" : "Exit"}
//                 </li>
//             </ul>
//         </div>
//     );
// };


import React from 'react'

export const UserPanel = () => {
  return (
    <div>UserPanel</div>
  )
}


