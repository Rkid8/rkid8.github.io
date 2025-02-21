import React, {useState} from "react";
import "./App.scss";
import Main from "./containers/Main";
// import GroupDetails from "./containers/group/GroupDetails";
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
      <StyleProvider value={{isDark, changeTheme, isEn, changeLanguage}}>
        <Main></Main>
      </StyleProvider>
  );
}

export default App;
