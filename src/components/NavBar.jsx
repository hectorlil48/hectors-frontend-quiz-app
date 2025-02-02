import sunIconDark from "../assets/images/icon-sun-dark.svg";
import moonIconDark from "../assets/images/icon-moon-dark.svg";

import sunIconLight from "../assets/images/icon-sun-light.svg";
import moonIconLight from "../assets/images/icon-moon-light.svg";
import "../styles/NavBar.css";

const NavBar = ({ handleChange, isChecked }) => {
  return (
    <nav className="navbar flex">
      <div className="logo-icon flex">
        {/* <img
          src={accessibilityIcon}
          alt="question category"
          className="title-icon"
        />
        <h1>Accessibility</h1> */}
      </div>
      <div className="toggle-container flex">
        <img src={isChecked ? sunIconLight : sunIconDark} alt="Sun icon" />

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

        <img src={isChecked ? moonIconLight : moonIconDark} alt="Moon icon" />
      </div>
    </nav>
  );
};

export default NavBar;
