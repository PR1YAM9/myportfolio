import React from 'react'
import './CurrentlyListening.css'

const CurrentlyListening = () => {
  return (
    <>
        <div className="CLbox">
            <div className="CLheading">Currently <br /> Listesing </div>
            <div className="CLspotify">
                <iframe className='song' style={{"border-radius":"12px" , "width":"100%", "height":"80px"}} src="https://open.spotify.com/embed/track/5M1h3cUTIOWgBRl4oUTzO6?utm_source=generator&theme=0"  frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                <iframe  className='song' style={{"border-radius":"12px" , "width":"100%", "height":"80px"}} src="https://open.spotify.com/embed/track/5M1h3cUTIOWgBRl4oUTzO6?utm_source=generator&theme=0"  frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                <iframe className='song' style={{"border-radius":"12px" , "width":"100%", "height":"80px"}} src="https://open.spotify.com/embed/track/5M1h3cUTIOWgBRl4oUTzO6?utm_source=generator&theme=0"  frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </div>
    </>
  )
}

export default CurrentlyListening