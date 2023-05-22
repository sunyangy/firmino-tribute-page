import React from "react";
import "./possibility.css";
import possibility from "../../assets/possibility.png";
import fimiBg from "../../assets/firmino-body.png";
const Possibility = () => {
  return (
    <div className="player__possibility section__padding" id="abouthe">
      <div className="player__possibility-heading">
        <img src={fimiBg} alt="" />
      </div>
      <div className="player__possibility-content">
        <h4>玉面郎君</h4>
        <h1 className="gradient__text">利物浦中最会庆祝的人</h1>
        <p>
          菲尔米诺球商高、无球跑动能力、阅读球赛能力、整体意识、支点的能力及伪9号的能力均很强，也有足够的协防意识，经常能在前场抢回控球权并发动反击，是少数具有策应能力又不贪功的前锋。他又会经常回到中场，为队友拉开对手和突破。他射门的时候间中会不看球(no
          look goal)。
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
