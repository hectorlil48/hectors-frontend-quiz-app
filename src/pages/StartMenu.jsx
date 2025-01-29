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
        <button>
          <img src={htmlIcon} alt="html icon" />
          HTML
        </button>
        <button>
          <img src={cssIcon} alt="" />
          CSS
        </button>
        <button>
          <img src={jsIcon} alt="" />
          Javascript
        </button>
        <button>
          <img src={accessibilityIcon} alt="" />
          Accessibility
        </button>
      </div>
    </div>
  );
};

export default StartMenu;
