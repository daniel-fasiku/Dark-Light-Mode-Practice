import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/Home Page/HomePage";
import "./App.css";

const App = () => {
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);

  const switchToDarkMode =  () => {
    setIsDarkModeActive(!isDarkModeActive)
  }

  return (
    <div className={isDarkModeActive? "app-container-dark-mode" : "app-container"} >
      <NavBar colorMode={isDarkModeActive} handleDarkModeSwitch={switchToDarkMode}/>
      <HomePage colorMode={isDarkModeActive}/>
    </div>
  )
}

export default App