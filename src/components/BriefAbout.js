import React from 'react'
import about1 from "../images/about-1.jpg"

const BriefAbout = () => {
  return (
    <>
    <div className='container d-flex my-5 align-items-center pre-BriefAbout-text '>
      <div className='BriefAbout-text'>
        <h4 className='pt-4'>ABOUT US</h4>
        <h2 className='fw-bold fs-1'>TENT</h2>
        <p>TENT is a leading platform for Engineering Design and connects engineering offices and customers, the expertise and experience that our partners bring, and we are known for staying inside of estimated budgets. If you’re in need of some remodelling done to your home or built a house from scratch, we’re sure to surpass your expectations!</p>
        <p>Thank you for considering us for your project. Please take the time to read our reviews and know that we stand behind our guarantee. We would love to earn your future business, not just the project you need done today.</p>
        <button className='calculator'>See Our Services</button>
      </div>
      <div className='about-img'>
        <img src={about1} alt='about1'/>
      </div>

    </div>
    </>
  )
}

export default BriefAbout