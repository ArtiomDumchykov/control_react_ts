import React from 'react'

import './Footer.scss';

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer__container _container">
            <h3 className='footer__title'>
              OktenSchool students by Artiom Dumchykov 
              (telegram: <a href="https://t.me/artemdumchykov" className='teleg-link' target='_blank' >@artemdumchykov</a>)
            </h3>
        </div>
    </div>
  )
}
