import React, { useState } from 'react';
import axios from 'axios';

function Dash() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("https://ama-ai-mqz55tjj3a-uw.a.run.app/chat", { prompt }, { withCredentials: true })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      setPrompt('');
  };

  return (
    <div className="container-fluid">
      <div className="first-container">
        <h1 className="title">Hello.</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit} className="form">
            <input className="text-container" type="text" placeholder="ask me anything" value={prompt} onChange={(e) => setPrompt(e.target.value)}  style={{ textAlign: 'center' }} />
            <button type="submit" className="btn" onClick={handleSubmit}>ENTER</button>
          </form>
        </div>
        <div className="answer-container">
          <p className="answer">{response}</p>
        </div>
      </div>
    </div>
  );
}

export default Dash;





