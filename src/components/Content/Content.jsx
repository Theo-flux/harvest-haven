import React from 'react'
import './content.css'
const contents = [
    {
      id: 1,
      number: '01',
      title: 'Seasonal Farming',
      text: 'This practice is largely determined by the climate and weather patterns of a region, as different crops thrive in different weather condition.',
    },
    {
        id: 2,
        number: '02',
        title: 'Farming Education',
        text: 'The goal of farming of farming education is to equip farmers with the knowledge and skills they need to increase productivity, improve crop yields.',
      },
      {
        id: 3,
        number: '03',
        title: 'Irrigation Scheduling',
        text: 'Factors such as soil moisture, crop type and weather condtitions all influences irrigation scheduling decisions.',
      },
]
const Content = () => {
  return (
    <section className='content-section'>
      <div className="content-container">
    {contents.map(content =>(
       <div className="content">
        <h2>{content.number}</h2>
        <h3>{content.title}</h3>
        <p className='text'>{content.text} <a href="#"> Read More</a></p>
       </div>   
        ))}
      </div> {/** content-container  ends */}
      <div className="content-mobile">
        <h4>Trending Contents</h4>
        <div className="cells">
        <p>01 Seasonal Farming</p>
        <p>01 Farming Education</p>
        </div> 
        <div className="bottom"><p>01 Irrigation Scheduling</p> </div>
     </div>  {/* content-mobile ends */}
    </section> /**content-section ends */
  )
}

export default Content
