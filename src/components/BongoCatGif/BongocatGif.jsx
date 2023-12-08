import React from 'react'
import cat from '../../images/bongocatGif.gif'
import './bongo.css'

import github from '../../images/githubSocial.svg'
import linkedin from '../../images/linkedinSocial.svg'
import twitter from '../../images/twitterSocial.jpeg'
import mail from '../../images/mailSocial.svg'
import discord from '../../images/discordSocial.jpeg'

const socials =[
    {
        nane: 'Linkedin',
        link: 'https://www.linkedin.com/in/abhishek-kumar-2a1a1b1b8/',
        icon: linkedin,
    },
    // {
    //     nane: 'Twitter',
    //     link: '',
    //     icon: twitter,
    // },
    {
        nane: 'Github',
        link: '',
        icon: github,
    },
    {
        nane: 'Mail',
        link: '',
        icon: mail,
    },
    // {
    //     nane: 'Discord',
    //     link: '',
    //     icon: discord,
    // },

]

const BongocatGif = () => {
  return (
    <>
        <div className="BGbox">
        <div className="BGheading">
            GET IN TOUCH
        </div>
            <div className="BGgif">
                <img className='cat' src={cat} alt="Bongocat" />
            </div>
            <div className="socials">
                    {
                        socials.map((item, index) => (
                            <div className="social" key={index}>
                                <a href={item.link}>
                                    <img className='socialImg' src={item.icon} alt={item.name} />
                                </a>
                            </div>
                        ))
                    }
            </div>
        </div>
    </>
  )
}

export default BongocatGif