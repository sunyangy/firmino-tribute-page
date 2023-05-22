import React from "react";
import "./article.css";
const Article = ({ imgUrl, date, text }) => {
  return (
    <div className="player__article">
      <div className="player__article-image">
        <img src={imgUrl} alt="" />
      </div>
      <div className="player__article-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
