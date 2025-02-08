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
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false); // Track if the answer was correct on the first attempt

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
      if (attempts === 0) {
        setAnsweredCorrectly(true); // Mark as correct on the first attempt
      }
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
      setAnsweredCorrectly(false); // Reset answeredCorrectly for the next question
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
          const isCorrectAnswer = option === question.answer;

          return (
            <button
              key={i}
              className={`btn flex ${isSelected ? "selected" : ""} 
                ${isIncorrect ? "incorrect" : ""} 
                ${
                  showCorrect && isCorrectAnswer && attempts === 0
                    ? "correct"
                    : ""
                } 
                ${
                  showCorrect && isCorrectAnswer && attempts === 1
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
                      showCorrect && isCorrectAnswer && attempts === 0
                        ? "correct-letter"
                        : ""
                    } 
                    ${
                      showCorrect && isCorrectAnswer && attempts === 1
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
      </div>
    </div>
  );
};

export default QuizPage;
