import { useState } from "react";
import "../styles/QuizPage.css";
import correctIcon from "../assets/images/icon-correct.svg";
import errorIcon from "../assets/images/icon-error.svg";

const QuizPage = ({ quizData, setQuizData, setScore }) => {
  const { questions, index } = quizData;
  const question = questions[index];
  const answerLetters = ["A", "B", "C", "D"];

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isWrong, setIsWrong] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleAnswerSelect = (answer) => {
    if (attempts < 2) {
      setSelectedAnswer(answer);
      setIsWrong(false); // Reset wrong state when selecting a new option
      setShowCorrect(false); // Hide correct styling until submit
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) {
      alert("Please select an answer!");
      return;
    }

    if (selectedAnswer === question.answer) {
      setScore((prev) => prev + 1);
      setShowCorrect(true);
      setTimeout(() => goToNextQuestion(), 1000);
    } else {
      setIsWrong(true);
      setAttempts((prev) => prev + 1);

      if (attempts + 1 === 2) {
        setShowCorrect(true); // Show the correct answer
        setTimeout(() => goToNextQuestion(), 1000);
      }
    }
  };

  const goToNextQuestion = () => {
    if (index + 1 < questions.length) {
      setQuizData({ ...quizData, index: index + 1 });
      setSelectedAnswer(null);
      setIsWrong(false);
      setShowCorrect(false);
      setAttempts(0);
    } else {
      setQuizData({ ...quizData, completed: true });
    }
  };

  return (
    <div className="quiz-container flex">
      <div className="question-container">
        <p className="pick-msg">
          Question {index + 1} of {questions.length}
        </p>
        <h3 className="question">{question.question}</h3>
      </div>
      <div className="answers btn-container flex">
        {question.options.map((option, i) => {
          const isSelected = selectedAnswer === option;
          const isIncorrect = isWrong && isSelected;
          const isCorrectAnswer = showCorrect && option === question.answer;

          return (
            <button
              key={i}
              className={`btn flex ${isSelected ? "selected" : ""} 
                ${isIncorrect ? "incorrect" : ""} 
                ${isCorrectAnswer ? "correct" : ""}`}
              onClick={() => handleAnswerSelect(option)}
              disabled={attempts === 2}
            >
              <div className="flex btn-content">
                <span
                  className={`answer-letters flex 
                    ${isSelected ? "selected-letter" : "answer-letter-color"} 
                    ${isIncorrect ? "incorrect-letter" : ""} 
                    ${isCorrectAnswer ? "correct-letter" : ""}`}
                >
                  {answerLetters[i]}
                </span>
                <span>{option}</span>
              </div>

              {isIncorrect && (
                <img
                  src={errorIcon}
                  alt="Incorrect"
                  className="icon-incorrect"
                />
              )}
              {isCorrectAnswer && (
                <img src={correctIcon} alt="Correct" className="icon-correct" />
              )}
            </button>
          );
        })}
        <button className="btn submit-btn" onClick={handleSubmit}>
          Submit Answer
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
