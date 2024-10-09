import React, { useState } from 'react';

function MobileScreen({ players, currentQuestion, questions, handlePlayerJoin, handleAnswerSubmission }) {
  const [name, setName] = useState('');
  const [hasJoined, setHasJoined] = useState(false);

  const joinGame = () => {
    handlePlayerJoin(name);
    setHasJoined(true);
  };

  const submitAnswer = (option) => {
    const isCorrect = option === questions[currentQuestion].correct;
    handleAnswerSubmission(isCorrect, name);
  };

  return (
    <div className="mobile-screen">
      {!hasJoined ? (
        <div>
          <h2>Enter your name to join the game:</h2>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <button onClick={joinGame}>Join</button>
        </div>
      ) : (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => submitAnswer(option)}>{option}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileScreen;
