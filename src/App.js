import React, { useState } from 'react';
import './App.css';
import Post from './components/Post';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';
import PostDetail from './components/PostDetail';

function App() {
  const postContent = `Consegui criar a aplicação com React, mesmo não sabendo nada, pro inferno com o copo meio cheio!`;

  const [comments, setComments] = useState([]);

  const handleSubmitComment = (comment) => {
    const newComment = {
      id: comments.length + 1,
      author: 'User',
      text: comment,
    };

    setComments([...comments, newComment]);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>JustSayIt</h1>
      </header>
      <Post title="Olá mundo!" content={postContent} author="Danilo Miguel" />
      <CommentList comments={comments} />
      <CommentForm onSubmit={handleSubmitComment} />
    </div>
  );
}

export default App;
