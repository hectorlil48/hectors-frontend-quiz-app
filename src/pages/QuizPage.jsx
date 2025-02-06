import "../styles/QuizPage.css";

const QuizPage = ({ quizData, setQuizData, setScore }) => {
  const { questions, index } = quizData;
  const question = questions[index];
  const answerLetters = ["A", "B", "C", "D"];

  return (
    <div className="quiz-container flex">
      <div className="question-container">
        <p className="pick-msg">
          Question {index + 1} of {questions.length}
        </p>
        <h3 className="question">{question.question}</h3>
      </div>
      <div className="answers btn-container flex">
        {question.options.map((option, i) => (
          <button key={i} className="btn flex">
            <span className="answer-letters flex">{answerLetters[i]}</span>
            <span>{option}</span>
          </button>
        ))}
        <button className="btn submit-btn">Submit Answer</button>
      </div>
    </div>
  );
};

export default QuizPage;
