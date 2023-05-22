import React from 'react'
import './features.css'
import {Feature} from '../../components'
const featuresData = [
  {
    title: "2019",
    text: "2018-19赛季欧冠冠军",
  },
  {
    title: "2019",
    text: "2019年欧洲超级杯冠军",
  },
  {
    title: "2019",
    text: "2019年世俱杯冠军",
  },
  {
    title: "2020",
    text: "2019-20赛季英超冠军",
  },
];
const Features = () => {
  return (
    <div className="player__features section__padding">
      <div className="player__features-heading">
        <h1 className="gradient__text">菲尔米诺在利物浦这些年的成就</h1>
        <p>去看看吧</p>
      </div>
      <div className="player__features-container">
        {featuresData.map((item, index) => {
          return <Feature title={item.title} text={item.text} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Features