import "../styles/Results.css";

const Results = ({
  score,
  totalQuestions,
  quizTitle,
  quizIcon,
  handleRestart,
}) => {
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
            <div
              className={`title-icon-box flex ${quizTitle.toLowerCase()}-icon`}
            >
              <img
                src={`${import.meta.env.BASE_URL}${quizIcon}`}
                alt="question category"
                className={`title-icon`}
              />
            </div>
            <h1 className="logo-title">{quizTitle}</h1>
          </div>
          <div className="score-box flex">
            <p className="score-title">{score}</p>
            <p className="total">out of {totalQuestions}</p>
          </div>
        </div>
        <button className="btn submit-btn" onClick={handleRestart}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Results;
