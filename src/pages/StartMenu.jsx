import { useState, useEffect } from "react";

import "../styles/StartMenu.css";

const StartMenu = ({ setQuizData, setQuizTitle, setQuizIcon }) => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    fetch("/hectors-frontend-quiz-app/data.json")
      .then((response) => response.json())
      .then((data) => {
        setQuizzes(data.quizzes);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleQuizSelection = (quiz) => {
    setQuizTitle(quiz.title); // Store quiz title in local storage
    setQuizIcon(quiz.icon);
    setQuizData({ ...quiz, index: 0, completed: false }); // Store quiz data
  };

  return (
    <div className="start-menu-container flex">
      <div className="welcome-msg">
        <h2 className="start-menu-title">Welcome to the</h2>
        <h2 className="bold">Frontend Quiz!</h2>
        <p className="pick-msg">Pick a subject to get started.</p>
      </div>
      <div className="btn-container flex">
        {quizzes.length === 0 ? (
          <p className="error-message">
            Failed to load quizzes. Try refreshing.{" "}
          </p>
        ) : (
          quizzes.map((quiz, index) => (
            <button
              key={index}
              className="flex btn"
              onClick={() => handleQuizSelection(quiz)}
            >
              <div className="flex btn-content">
                <div
                  className={`btn-icon-box flex  ${quiz.title.toLowerCase()}-icon`}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}${quiz.icon}`}
                    alt={`${quiz.title} icon`}
                    className="btn-icon"
                  />
                </div>
                <span>{quiz.title}</span>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default StartMenu;
