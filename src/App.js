import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainScreen from './components/MainScreen';
import MobileScreen from './components/MobileScreen';
import questions from './questions';

function App() {
  const [players, setPlayers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [results, setResults] = useState([]);

  const handlePlayerJoin = (name) => {
    setPlayers([...players, { name, correctAnswers: 0 }]);
  };

  const handleAnswerSubmission = (isCorrect, playerName) => {
    if (isCorrect) {
      setResults([...results, `${playerName} answered correctly!`]);
      setPlayers(players.map(player =>
        player.name === playerName ? { ...player, correctAnswers: player.correctAnswers + 1 } : player
      ));
    } else {
      setResults([...results, `${playerName} answered incorrectly. Try harder next time!`]);
    }
    setTimeout(() => {
      setCurrentQuestion(currentQuestion + 1);
    }, 2000);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <MainScreen
            players={players}
            questions={questions}
            currentQuestion={currentQuestion}
            results={results}
          />
        } />
        <Route path="/mobile" element={
          <MobileScreen
            players={players}
            currentQuestion={currentQuestion}
            questions={questions}
            handlePlayerJoin={handlePlayerJoin}
            handleAnswerSubmission={handleAnswerSubmission}
          />
        } />
      </Routes>
    </Router>
  );
}

export default App;
