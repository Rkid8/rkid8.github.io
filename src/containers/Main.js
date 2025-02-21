import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Group from "./group1/group";
import Footer from "../components/footer/Footer";
import ScrollToTopButton from "./topbutton/Top";
import SplashScreen from "./splashScreen/SplashScreen";
import { splashScreen } from "../portfolio";
import StyleContext from "../contexts/StyleContext";
import "./Main.scss";
import Intro from "./intro/intro";
import Scholar from "./scholar/scholar";
import Direction from "./direction/direction";
import Plog from "./plog/plog";

const Main = () => {
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(true);
  const { isDark } = useContext(StyleContext);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  // 动态更新缩放比例
  useEffect(() => {
    const updateScaleFactor = () => {
      // 根据窗口宽度调整缩放比例
      const scaleFactor = window.innerWidth > 1200 ? 2 : 1.5;
      document.documentElement.style.setProperty('--scale-factor', scaleFactor);
    };

    // 初始化
    updateScaleFactor();

    // 监听窗口大小变化
    window.addEventListener('resize', updateScaleFactor);

    // 清理事件监听器
    return () => {
      window.removeEventListener('resize', updateScaleFactor);
    };
  }, []);

  return (
    <Router>
      <div className={isDark ? "dark-mode" : null}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Greeting />} />
              <Route path="/group" element={<Group />} />
              <Route path="/intro" element={<Intro />} />
              <Route path="/scholar" element={<Scholar />} />
              <Route path="/direction" element={<Direction />} />
              <Route path="/plog" element={<Plog />} />
            </Routes>
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </div>
    </Router>
  );
};

export default Main;