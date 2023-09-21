import { useState } from "react";

export default function Card(props) {
  const [isActive, setIsActive] = useState(true);
  let image;

  if (!props.image) {
    image = "https://placehold.co/200X150?text=News Story";
  } else {
    image = props.image;
  }

  return (
    <div
      className="card_container"
      style={{
        display: isActive ? "flex" : "none"
      }}
    >
      <div className="img_container">
        <img className="image" src={image} alt="" />
        <div className="card_title">
          <a className="card_link" href={props.link}>
            <h2 className="story_title">{props.storyTitle}</h2>
          </a>
          <p className="story_author">By: {props.author}</p>
        </div>
      </div>
      <p className="story_description">{props.description}</p>
      <button className="btn" onClick={() => setIsActive(false)}>
        Delete News
      </button>
    </div>
  );
}
