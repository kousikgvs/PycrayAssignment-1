import React from "react";
import "./Blogcard.css";
const Blogcard = (props) => {
  return (
    <div className="Blogcard">
      <img src={props.imgurl} className="blogImage" />
      <div className="blogHeading1">
        <p className="blogdate">{props.date}</p>
        <p className="blogcontext">{props.context}</p>
      </div>
      <div className="blogHeading2">{props.heading}</div>
      <div className="blogContent">{props.content}</div>
    </div>
  );
};

export default Blogcard;
