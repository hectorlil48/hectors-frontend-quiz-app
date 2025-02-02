import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/StartMenu.css";

const StartMenu = () => {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/hectors-frontend-quiz-app/data.json")
      .then((response) => response.json())
      .then((data) => {
        setQuizzes(data.quizzes);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="start-menu-container flex">
      <div className="welcome-msg">
        <h2 className="start-menu-title">
          Welcome to the
          <br /> <span className="bold">Frontend Quiz!</span>
        </h2>
        <p className="pick-msg">Pick a subject to get started.</p>
      </div>
      <div className="btn-container flex">
        {quizzes.map((quiz, index) => (
          <button key={index} className="flex btn">
            <img
              src={`${import.meta.env.BASE_URL}${quiz.icon}`}
              alt={`${quiz.title} icon`}
              className={`${quiz.title.toLowerCase()}-icon`}
            />
            <span>{quiz.title}</span>
          </button>
        ))}

        {/* <button className="flex btn">
          <img src={htmlIcon} alt="html icon" className="html-icon" />
          <span>HTML</span>
        </button>
        <button className="flex btn">
          <img src={cssIcon} alt="css icon" className="css-icon" />
          <span>CSS</span>
        </button>
        <button className="flex btn">
          <img src={jsIcon} alt="javascript icon" className="js-icon" />
          <span>Javascript</span>
        </button>
        <button className="flex btn">
          <img
            src={accessibilityIcon}
            alt="accessibility icon"
            className="accessibility-icon"
          />
          <span>Accessibility</span>
        </button> */}
      </div>
    </div>
  );
};

export default StartMenu;
