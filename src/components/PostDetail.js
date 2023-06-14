import React from 'react';

function PostDetail(props) {
  return (
    <div className="post-detail">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <p className="post-author">Written by: {props.author}</p>
    </div>
  );
}

export default PostDetail;
