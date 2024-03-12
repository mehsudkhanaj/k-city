import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setplayerstate}) => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt='' className='about_img' />
        <img src={play_icon} alt='' className='play-icon' onClick={()=>setplayerstate(true)} />
      </div>

      <div className='about-right'>
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leader Today</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          enim non delectus Quasi, laborum vitae laboriosam quibusdam aliquid
          ducimus natus fugiat.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          enim non delectus Quasi, laborum vitae laboriosam quibusdam aliquid
          ducimus natus fugiat.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          enim non delectus Quasi, laborum vitae laboriosam quibusdam aliquid
          ducimus natus fugiat.
        </p>
      </div>
    </div>
  )
}

export default About
