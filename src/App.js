import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";
import GroupDetails from "./containers/group/GroupDetails";
import {StyleProvider} from "./contexts/StyleContext";

function App() {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useState(darkPref.matches);
  const [isEn, setIsEn] = useState(false);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  const changeLanguage = () => {
    setIsEn(!isEn);
  };

  return (
    <Router>
      <StyleProvider value={{isDark, changeTheme, isEn, changeLanguage}}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/group/" element={<GroupDetails />} />
          <Route path="/group-details" element={<GroupDetails />} />
        </Routes>
      </StyleProvider>
    </Router>
  );
}

export default App;
