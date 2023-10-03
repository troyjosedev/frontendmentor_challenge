import  { useState } from "react";
import Header from "./Header";
import Main from "./Card_Container";


function Attribution() {
  return (
    <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>
      Coded by <a href="#">Troy Jose</a>
    </div>
  );
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
    
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Main isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
      <Attribution/>
    </>
  );
}

export default App;
