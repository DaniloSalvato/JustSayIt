import React, { useState } from 'react';
import './Post.css';

function Post(props) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="post">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <p>Author: {props.author}</p>
      <button className="post-like-button" onClick={handleLike}>
        Like ({likes})
      </button>
      <div>{props.children}</div>
    </div>
  );
}

export default Post;
