import React from 'react';

function CommentList(props) {
  const { comments } = props;

  return (
    <div className="comment-list">
      <h3>Comentário</h3>
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <p className="comment-author">{comment.author}</p>
          <p className="comment-text">{comment.text}</p>
        </div>
      ))}
    </div>
  );
}

export default CommentList;
