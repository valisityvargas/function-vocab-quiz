'use client';
import React, { useState } from 'react';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizComplete, setQuizComplete] = useState(false);

  const questions = [
    {
      term: "A function is positive when...",
      image: (
        <svg viewBox="0 0 300 200" className="w-full h-48 mb-4">
          <line x1="0" y1="100" x2="300" y2="100" stroke="black" />
          <line x1="150" y1="0" x2="150" y2="200" stroke="black" />
          <path d="M 0 70 Q 150 30 300 50" fill="none" stroke="blue" strokeWidth="2" />
        </svg>
      ),
      options: [
        "The graph is above the x-axis",
        "The graph is below the x-axis",
        "The graph is moving upward",
        "The slope is positive"
      ],
      correct: 0,
      explanation: "A function is positive when all y-values (outputs) are greater than zero, meaning the graph lies above the x-axis."
    },
    {
      term: "A function is increasing when...",
      image: (
        <svg viewBox="0 0 300 200" className="w-full h-48 mb-4">
          <line x1="0" y1="180" x2="300" y2="180" stroke="black" />
          <line x1="20" y1="0" x2="20" y2="200" stroke="black" />
          <path d="M 20 180 L 280 20" fill="none" stroke="blue" strokeWidth="2" />
        </svg>
      ),
      options: [
        "The graph is above the x-axis",
        "As you move left to right, outputs increase",
        "The slope is positive",
        "The function is concave up"
      ],
      correct: 1,
      explanation: "A function is increasing when outputs increase as inputs increase (moving left to right on the graph)."
    },
    {
      term: "The rate of change is positive when...",
      image: (
        <svg viewBox="0 0 300 200" className="w-full h-48 mb-4">
          <line x1="0" y1="180" x2="300" y2="180" stroke="black" />
          <line x1="20" y1="0" x2="20" y2="200" stroke="black" />
          <path d="M 20 160 Q 150 20 280 20" fill="none" stroke="blue" strokeWidth="2" />
        </svg>
      ),
      options: [
        "The function is above the x-axis",
        "The function is increasing",
        "The slope is greater than zero",
        "The function is concave up"
      ],
      correct: 2,
      explanation: "The rate of change is positive when the slope is greater than zero, meaning the line or tangent line slopes upward."
    },
    {
      term: "A function is concave up when...",
      image: (
        <svg viewBox="0 0 300 200" className="w-full h-48 mb-4">
          <line x1="0" y1="180" x2="300" y2="180" stroke="black" />
          <line x1="20" y1="0" x2="20" y2="200" stroke="black" />
          <path d="M 20 160 Q 150 260 280 20" fill="none" stroke="blue" strokeWidth="2" />
        </svg>
      ),
      options: [
        "The function is above the x-axis",
        "The function is always increasing",
        "The slope is always positive",
        "The slope is increasing (getting more positive or less negative)"
      ],
      correct: 3,
      explanation: "A function is concave up when the slope is increasing - either becoming more positive or less negative as you move left to right."
    }
  ];

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    setShowFeedback(true);
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowFeedback(false);
      setSelectedAnswer(null);
    } else {
      setQuizComplete(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowFeedback(false);
    setSelectedAnswer(null);
    setQuizComplete(false);
  };

  if (quizComplete) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Quiz Complete!</h2>
        <div className="text-center">
          <p className="text-2xl mb-4">Your Score: {score} out of {questions.length}</p>
          <p className="mb-6">({Math.round((score/questions.length) * 100)}%)</p>
          <button 
            onClick={restartQuiz}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-6">
        <p className="text-lg mb-2">Question {currentQuestion + 1} of {questions.length}</p>
        <p className="text-xl font-medium mb-4">{questions[currentQuestion].term}</p>
        {questions[currentQuestion].image}
      </div>

      <div className="space-y-3">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => !showFeedback && handleAnswer(index)}
            className={`w-full text-left p-3 rounded-lg border transition-colors
              ${showFeedback && index === selectedAnswer 
                ? index === questions[currentQuestion].correct
                  ? 'bg-green-500 text-white'
                  : 'bg-red-500 text-white'
                : 'hover:bg-gray-50'
              }`}
            disabled={showFeedback}
          >
            {option}
          </button>
        ))}
      </div>

      {showFeedback && (
        <div className="mt-6">
          <p className={`p-4 rounded-lg ${
            selectedAnswer === questions[currentQuestion].correct 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {questions[currentQuestion].explanation}
          </p>
          <button 
            onClick={nextQuestion}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
          </button>
        </div>
      )}
    </div>
  );
}
