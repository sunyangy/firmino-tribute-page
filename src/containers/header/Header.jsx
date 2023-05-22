import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header = () => {
  return (
    <div className="player__header section__padding">
      <div className="player__header-content">
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <div className="player__header-desc">
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
        </div>
        <div className="player__header-input">
          <input type="email" placeholder="Your Email Address" />
          <button>Get Started</button>
        </div>
        <div className="player__header-people-container">
          <div className="player__header-people-image">
            <img src={people} alt="" />
          </div>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="player__header-bg">
        <img src={ai} alt="" />
      </div>
    </div>
  );
}

export default Header