import React from 'react'
import './feature.css'
const Feature = ({title, text}) => {
  return (
    <div className='player__feature'>
      <div className='player__feature-title'>
        <div></div>
        <h1>{title}</h1>
      </div>
      <div className='player__feature-container-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature