import { useState } from "react";
import "../styles/QuizPage.css";

const QuizPage = ({ quizData, setQuizData, setScore }) => {
  const { questions, index } = quizData;
  const question = questions[index];
  const answerLetters = ["A", "B", "C", "D"];

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isWrong, setIsWrong] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setIsWrong(false); // Reset wrong state on new selection
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) {
      alert("Please select an answer!");
      return;
    }

    if (selectedAnswer === question.answer) {
      setScore((prev) => prev + 1);
      setIsWrong(false);

      // Move to the next question only if the answer is correct
      if (index + 1 < questions.length) {
        setQuizData({ ...quizData, index: index + 1 });
      } else {
        setQuizData({ ...quizData, completed: true });
      }
    } else {
      setIsWrong(true);
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

          return (
            <button
              key={i}
              className={`btn flex ${isSelected ? "selected" : ""} ${
                isIncorrect ? "incorrect" : ""
              }`}
              onClick={() => handleAnswerSelect(option)}
            >
              <span
                className={`answer-letters flex ${
                  isSelected ? "selected-letter" : "answer-letter-color"
                } ${isIncorrect ? "incorrect-letter" : ""}`}
              >
                {answerLetters[i]}
              </span>
              <span>{option}</span>
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
