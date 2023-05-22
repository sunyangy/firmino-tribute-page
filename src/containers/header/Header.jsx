import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import bobi from '../../assets/bobi.png'
const Header = () => {
  return (
    <div className="player__header section__padding" id='home'>
      <div className="player__header-content">
        <h1 className="gradient__text">
          致敬利物浦传奇 <br />
          罗伯托·菲尔米诺
        </h1>
        <div className="player__header-desc">
          <p>
            罗伯托·菲尔米诺，为一名巴西职业足球员，在场上司职进攻中场或前锋。现效力英超球会利物浦。他曾是巴西国家足球队队员。
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
          <p>在全世界拥有众多的粉丝</p>
        </div>
      </div>
      <div className="player__header-bg">
        <img src={bobi} alt="" />
      </div>
    </div>
  );
}

export default Header