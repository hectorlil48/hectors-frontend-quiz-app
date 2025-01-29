import htmlIcon from "../assets/images/icon-html.svg";
import cssIcon from "../assets/images/icon-css.svg";
import jsIcon from "../assets/images/icon-js.svg";
import accessibilityIcon from "../assets/images/icon-accessibility.svg";
import "../styles/StartMenu.css";

const StartMenu = () => {
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
        <button className="flex btn">
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
        </button>
      </div>
    </div>
  );
};

export default StartMenu;
