import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="leftFooter">
            <p>© 2024 by <span>Priyam Maini</span></p>
        </div>
        <div className="rightFooter">
            <p>Designed by <a href='https://sanya.framer.website' target='_blank' rel='noreferrer' className='sanya'>Sanya</a></p>
        </div>
    </div>
  )
}

export default Footer