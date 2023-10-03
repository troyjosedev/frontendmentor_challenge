import { useEffect } from "react";

const Title = ({ title, isDarkMode }) => (
  <h1 className={`title ${isDarkMode ? 'title-white' : ''}`}>{title}</h1>
);

const Total = ({ num }) => <p className="followers">Total Followers: {num}</p>;


const DarkMode = ({ isDarkMode, toggleDarkMode }) => {
  useEffect(() => {
    // Update the body background color based on the isDarkMode prop
    document.body.style.backgroundColor = isDarkMode ? "hsl(230, 17%, 14%)" : "hsl(0, 0%, 100%)";
  }, [isDarkMode]);

  return (
    <div className="toggle-theme-wrapper">
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        <div className="slider round"></div>
      </label>
    </div>
  );
};

export default function Header({ isDarkMode, toggleDarkMode }) {
  return (
    <div className={`header ${isDarkMode ? 'dark-header' : ''}`}>
      <div className="line">
      <Title title="Social Media Dashboard" isDarkMode={isDarkMode} />
      <Total num="23,004" />
      </div>
      <hr className="hr-line"></hr>
      <div className="dark-flex">
        <p>Dark Mode</p>
        <DarkMode isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  );
}
