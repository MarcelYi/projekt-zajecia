import React from 'react'
import './Home.css'
import obraz from './zdjecie-removebg-preview.png'


function Home() {
  return (
    <div className='home_main'>

      <div className='home_top'>
          <div className='home_about'> O projekcie</div>
      </div>


      <div className='home_bottom'>

          <div className='home_left'>
              <img className='home_logo' src={obraz} alt='logo' /></div>

          <div className='home_right'>
            <h1 className='home_title'>PORTAL O DRONACH</h1>
            <div className='home_subtitle'>Drony oou  y  e  a c  h</div>
            <button className='home_button'> FBI OPEN AP </button>
            </div>
          </div>

        
      </div>
  )
}

export default Home