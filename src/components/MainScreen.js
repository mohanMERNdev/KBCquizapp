import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

function MainScreen({ players, questions, currentQuestion, results }) {
  return (
    <div className="main-screen">
      <h1>KBC Quiz: scan and play</h1>
      <QRCodeCanvas value="https://kb-cquizapp.vercel.app//mobile" size={128} />
      <h2>Players Joined:</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name}</li>
        ))}
      </ul>
      <h2>Current Question:</h2>
      {currentQuestion < questions.length ? (
        <p>{questions[currentQuestion].question}</p>
      ) : (
        <h2>Game Over!</h2>
      )}
      <h2>Results:</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default MainScreen;
