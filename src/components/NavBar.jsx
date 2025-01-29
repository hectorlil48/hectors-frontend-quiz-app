import accessibilityIcon from "../assets/images/icon-accessibility.svg";
import sunIcon from "../assets/images/icon-sun-dark.svg";
import moonIcon from "../assets/images/icon-moon-dark.svg";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar flex">
      <div className="logo-icon flex">
        <img
          src={accessibilityIcon}
          alt="question category"
          className="title-icon"
        />
        <h1>Accessibility</h1>
      </div>
      <div className="toggle-container flex">
        <img src={sunIcon} alt="sun icon" />

        <div className="toggle-box flex">
          <input
            type="checkbox"
            id="check"
            className="toggle"
            // onChange={handleChange}
            // checked={isChecked}
          />
          <label htmlFor="check"></label>
        </div>

        <img src={moonIcon} alt="moon icon" />
      </div>
    </nav>
  );
};

export default NavBar;
