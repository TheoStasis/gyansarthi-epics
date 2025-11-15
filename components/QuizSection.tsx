'use client';

import { useState } from 'react';
import { CheckCircle, XCircle, Trophy, RotateCcw, Brain } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  subject: string;
}

const quizData: Question[] = [
  {
    id: 1,
    question: 'भारत की राजधानी कौन सी है?',
    options: ['मुंबई', 'नई दिल्ली', 'कोलकाता', 'चेन्नई'],
    correctAnswer: 1,
    subject: 'भूगोल',
  },
  {
    id: 2,
    question: '2 + 2 × 3 का मान क्या है?',
    options: ['12', '8', '10', '6'],
    correctAnswer: 1,
    subject: 'गणित',
  },
  {
    id: 3,
    question: 'पानी का रासायनिक सूत्र क्या है?',
    options: ['H2O', 'CO2', 'O2', 'H2O2'],
    correctAnswer: 0,
    subject: 'विज्ञान',
  },
  {
    id: 4,
    question: 'भारत को स्वतंत्रता किस वर्ष मिली?',
    options: ['1942', '1945', '1947', '1950'],
    correctAnswer: 2,
    subject: 'इतिहास',
  },
  {
    id: 5,
    question: 'सबसे बड़ा ग्रह कौन सा है?',
    options: ['पृथ्वी', 'मंगल', 'बृहस्पति', 'शनि'],
    correctAnswer: 2,
    subject: 'विज्ञान',
  },
];

export function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    
    if (answerIndex === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    setAnsweredQuestions([...answeredQuestions, currentQuestion]);
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions([]);
  };

  const progress = ((currentQuestion + 1) / quizData.length) * 100;

  if (showResult) {
    const percentage = (score / quizData.length) * 100;
    
    return (
      <Card className="max-w-2xl mx-auto p-8 text-center">
        <div className="mb-6">
          <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-orange-600 mb-2">प्रश्नोत्तरी पूर्ण!</h3>
          <p className="text-gray-600">बधाई हो! आपने प्रश्नोत्तरी पूरी कर ली है।</p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-green-50 rounded-xl p-8 mb-6">
          <div className="text-6xl mb-2">{percentage >= 70 ? '🎉' : percentage >= 50 ? '👍' : '💪'}</div>
          <p className="text-gray-600 mb-2">आपका स्कोर</p>
          <div className="text-5xl mb-4">
            <span className="text-orange-600">{score}</span>
            <span className="text-gray-400">/{quizData.length}</span>
          </div>
          <p className="text-gray-600">
            {percentage >= 70 ? 'उत्कृष्ट प्रदर्शन!' : percentage >= 50 ? 'अच्छा प्रयास!' : 'और अभ्यास करें!'}
          </p>
        </div>

        <Button
          onClick={handleRestart}
          className="bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          फिर से प्रयास करें
        </Button>
      </Card>
    );
  }

  const question = quizData[currentQuestion];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-orange-600" />
            <span className="text-sm text-gray-600">
              प्रश्न {currentQuestion + 1} / {quizData.length}
            </span>
          </div>
          <Badge variant="secondary" className="bg-orange-100 text-orange-700">
            {question.subject}
          </Badge>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="p-8 shadow-lg border-2 border-orange-100">
        <h3 className="text-gray-800 mb-8">{question.question}</h3>

        <div className="grid gap-3 mb-6">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === question.correctAnswer;
            const showCorrect = selectedAnswer !== null && isCorrect;
            const showIncorrect = isSelected && !isCorrect;

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={selectedAnswer !== null}
                className={`p-4 text-left rounded-lg border-2 transition-all ${
                  showCorrect
                    ? 'bg-green-50 border-green-500'
                    : showIncorrect
                    ? 'bg-red-50 border-red-500'
                    : isSelected
                    ? 'bg-orange-50 border-orange-500'
                    : 'bg-white border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                } ${selectedAnswer !== null ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-800">{option}</span>
                  {showCorrect && <CheckCircle className="w-6 h-6 text-green-600" />}
                  {showIncorrect && <XCircle className="w-6 h-6 text-red-600" />}
                </div>
              </button>
            );
          })}
        </div>

        {selectedAnswer !== null && (
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                selectedAnswer === question.correctAnswer
                  ? 'bg-green-100'
                  : 'bg-red-100'
              }`}>
                {selectedAnswer === question.correctAnswer ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600" />
                )}
              </div>
              <span className="text-sm text-gray-600">
                {selectedAnswer === question.correctAnswer ? 'सही उत्तर!' : 'गलत उत्तर'}
              </span>
            </div>
            <Button
              onClick={handleNext}
              className="bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700"
            >
              {currentQuestion < quizData.length - 1 ? 'अगला प्रश्न' : 'परिणाम देखें'}
            </Button>
          </div>
        )}
      </Card>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          स्कोर: <span className="text-orange-600">{score}</span> / {answeredQuestions.length}
        </p>
      </div>
    </div>
  );
}
