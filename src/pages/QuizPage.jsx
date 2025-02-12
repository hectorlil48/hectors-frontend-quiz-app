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
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleAnswerSelect = (answer) => {
    if (attempts < 2) {
      setSelectedAnswer(answer);
      setIsWrong(false); // Reset wrong state when selecting a new option
      setShowCorrect(false); // Hide correct styling until submit
      setShowErrorMessage(false);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) {
      setShowErrorMessage(true);
      return;
    }

    if (selectedAnswer === question.answer) {
      setScore((prev) => prev + 1);

      setShowCorrect(true); // Show correct answer after submission
      setTimeout(() => goToNextQuestion(), 1000);
    } else {
      setIsWrong(true);
      setAttempts((prev) => prev + 1);

      if (attempts + 1 === 2) {
        // Show correct answer on the second attempt
        setShowCorrect(true);
        setTimeout(() => goToNextQuestion(), 1500);
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
      setShowErrorMessage(false);
    } else {
      setQuizData({ ...quizData, completed: true });
    }
  };

  return (
    <div className="quiz-container flex">
      <div className="question-container">
        <div className="pick-msg-container">
          <p className="pick-msg">
            Question {index + 1} of {questions.length}
          </p>
          <h3 className="question">{question.question}</h3>
        </div>
      </div>
      <div className="answers btn-container flex">
        {question.options.map((option, i) => {
          const isSelected = selectedAnswer === option;
          const isIncorrect = isWrong && isSelected;
          const isCorrectAnswer = option === question.answer;

          return (
            <button
              key={i}
              className={`btn flex ${isSelected ? "selected" : ""} 
                ${isIncorrect ? "incorrect" : ""} 
               ${
                 showCorrect && isCorrectAnswer && attempts <= 1
                   ? "correct"
                   : ""
               }`} // Apply "correct" on the first and second attempts
              onClick={() => handleAnswerSelect(option)}
              disabled={attempts === 2}
            >
              <div className="flex btn-content">
                <span
                  className={`answer-letters flex 
                    ${isSelected ? "selected-letter" : "answer-letter-color"} 
                    ${isIncorrect ? "incorrect-letter" : ""} 
                   ${
                     showCorrect && isCorrectAnswer && attempts <= 1
                       ? "correct-letter"
                       : ""
                   }`} // Apply "correct-letter" on both attempts
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
              {showCorrect && isCorrectAnswer && (
                <img src={correctIcon} alt="Correct" className="icon-correct" />
              )}
            </button>
          );
        })}
        <button className="btn submit-btn" onClick={handleSubmit}>
          Submit Answer
        </button>
        {showErrorMessage && (
          <div className="flex error-message">
            <img src={errorIcon} alt="Incorrect" className="icon-incorrect" />
            <p>Please select an answer</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
