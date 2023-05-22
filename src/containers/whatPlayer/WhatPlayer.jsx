import React from 'react'
import './whatPlayer.css'
import {Feature} from '../../components'
const WhatPlayer = () => {
  return (
    <div className="player__whatplayer section__margin" id="whatishe">
      <div className="player__whatplayer-features">
        <Feature
          title="他 是 谁"
          text="罗伯托·菲尔米诺，为一名巴西职业足球员，在场上司职进攻中场或前锋。现效力英超球会利物浦。他曾是巴西国家足球队队员。"
        />
      </div>
      <div className="player__whatplayer-heading">
        <h1 className="gradient__text">生 涯 履 历</h1>
        <p>探索更多</p>
      </div>
      <div className="player__whatplayer-mulip-features">
        <Feature
          title="费古埃伦斯"
          text="菲尔米诺是在巴西东北城市马塞约的巴西雷加塔斯足球俱乐部开始其足球生涯"
        />
        <Feature
          title="霍芬海姆"
          text="2010年12月，菲尔米诺与德国足球甲级联赛球队霍芬海姆签订合约，但直至2011年1月1日才正式加盟，双方签署了一份期至2015年的合同"
        />
        <Feature
          title="利物浦"
          text="2015年6月24日，利物浦宣布签入菲尔米诺，转会费为2900万英镑。在2015-2016赛季"
        />
      </div>
    </div>
  );
}

export default WhatPlayer