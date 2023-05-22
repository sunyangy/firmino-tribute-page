import React from 'react'
import './blog.css'
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import {Article} from '../../components'
const Blog = () => {
  return (
    <div className="player__blog section__padding" id='blogs'>
      <h1 className="gradient__text">
        关于他的 <br />
        一些事情
      </h1>
      <div className="player__blog-container">
        <div className="player__blog-container-groupA">
          <Article
            imgUrl={blog04}
            date="Sep 26, 2021"
            text="利物浦球迷最喜欢的球员"
          />
        </div>
        <div className="player__blog-container-groupB">
          <Article
            imgUrl={blog04}
            date="Sep 26, 2021"
            text="利物浦球迷最喜欢的球员"
          />
          <Article
            imgUrl={blog04}
            date="Sep 26, 2021"
            text="利物浦球迷最喜欢的球员"
          />
          <Article
            imgUrl={blog04}
            date="Sep 26, 2021"
            text="利物浦球迷最喜欢的球员"
          />
          <Article
            imgUrl={blog04}
            date="Sep 26, 2021"
            text="利物浦球迷最喜欢的球员"
          />
        </div>
      </div>
    </div>
  );
}

export default Blog