import React from 'react'
import cat from '../../images/cat-4.gif'
import './bongo.css'

import github from '../../images/githubSocial.svg'
import linkedin from '../../images/linkedinSocial.svg'
import twitter from '../../images/Frame 102.svg'
import mail from '../../images/mailSocial.svg'
import discord from '../../images/DiscordLogo.svg'

const socials =[
    {
        nane: 'Linkedin',
        link: 'https://www.linkedin.com/in/priyam-maini-9730a419b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BupwxYxllSrmMoDdo0T9S%2BA%3D%3D',
        icon: linkedin,
    },
    {
        nane: 'Twitter',
        link: 'https://x.com/priyam9maini',
        icon: twitter,
    },
    {
        nane: 'Github',
        link: 'https://github.com/PR1YAM9',
        icon: github,
    },
    {
        nane: 'Mail',
        link: 'https://mail.google.com/mail/?view=cm&fs=1&to=priyam9maini@gmail.com',
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
                                <a rel="noreferrer" target='_blank' href={item.link}>
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