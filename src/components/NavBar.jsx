import sunIconDark from "../assets/images/icon-sun-dark.svg";
import moonIconDark from "../assets/images/icon-moon-dark.svg";

import sunIconLight from "../assets/images/icon-sun-light.svg";
import moonIconLight from "../assets/images/icon-moon-light.svg";
import "../styles/NavBar.css";

const NavBar = ({ handleChange, isChecked, quizTitle, quizIcon }) => {
  return (
    <nav className="navbar flex">
      {quizTitle && (
        <div className="logo-icon flex">
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
      )}
      <div className="toggle-container flex">
        <img
          src={isChecked ? sunIconLight : sunIconDark}
          alt="Sun icon"
          className="icon-size"
        />

        <div className="toggle-box flex">
          <input
            type="checkbox"
            id="check"
            className="toggle"
            onChange={handleChange}
            checked={isChecked}
            aria-checked={isChecked}
            tabIndex="0"
          />
          <label htmlFor="check" aria-label="Toggle dark mode"></label>
        </div>

        <img
          src={isChecked ? moonIconLight : moonIconDark}
          alt="Moon icon"
          className="icon-size"
        />
      </div>
    </nav>
  );
};

export default NavBar;
