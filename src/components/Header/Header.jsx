import React from 'react'
import './Header.css'
import img1 from '../../images/image 1.svg'
import img2 from '../../images/image 2.svg'

const Header = () => {
  return (
    <>
        <header>
            <h1>Diving into the W<img className='imgHeader' src={img1} alt="o" />rld <br /> of C<img className='imgHeader' src={img2} alt="o" />de, Creativity,<br /> and Continuous Learning</h1>
        </header>
    </>
  )
}

export default Header