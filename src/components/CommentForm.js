import React, { useState } from 'react';
import './CommentForm.css';

function CommentForm(props) {
  const [comment, setComment] = useState('');

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(comment);
    setComment('');
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <h3>Adicione seu comentário</h3>
      <textarea
        className="comment-input"
        value={comment}
        onChange={handleInputChange}
        placeholder="Escreva aqui..."
      />
      <button className="comment-submit" type="submit">
        Enviar
      </button>
    </form>
  );
}

export default CommentForm;
