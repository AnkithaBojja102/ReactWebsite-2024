import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
<div className="about-left">
<img src={about_img} alt="" className='about-img'/>
{/* <img src={play_icon} alt="" className='play-icon'/> */}
</div>
<div className="about-right">
<h3>ABOUT UNIVERSITY</h3>
<h2>Empowering Tomorrow's GreatLeaders</h2>
<p>The way of gently handling the students and empowering them to understand the todays world</p>
<p>Demmed eduacation towards the emerging trends,technologies and towards the skills which can help to them to stand out of the crowd</p>
<p>A place with good Atmosphere and well experienced facuilty which can clearly drive them to self goals</p>
    </div>
</div>
  )
}

export default About