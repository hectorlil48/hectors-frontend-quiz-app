import "../styles/Results.css";

const Results = ({
  score,
  setScore,
  totalQuestions,
  setQuizData,
  setQuizTitle,
  quizTitle,
  quizIcon,
}) => {
  const handlePlayAgain = () => {
    setQuizData(null);
    setQuizTitle(null);
    setScore(0);
  };
  return (
    <div className="results-container flex">
      <div className="results-title">
        <h2 className="start-menu-title">
          Quiz completed
          <br /> <span className="bold">You scored...</span>
        </h2>
      </div>
      <div className="score-card">
        <div className="score-header flex">
          <div className="flex logo-icon">
            <img
              src={`${import.meta.env.BASE_URL}${quizIcon}`}
              alt="question category"
              className={`title-icon ${quizTitle.toLowerCase()}-icon`}
            />
            <h1>{quizTitle}</h1>
          </div>
          <p className="score-title">{score}</p>
          <p className="pick-msg">out of {totalQuestions}</p>
        </div>

        <button className="btn submit-btn" onClick={handlePlayAgain}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Results;
