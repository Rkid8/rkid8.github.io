import React, {useState, useContext} from "react";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";

const SwitchComponent = ({checked, onChange, emoji1, emoji2}) => (
  <label className="switch">
    <input type="checkbox" checked={checked} onChange={onChange} />
    <span className="slider round">
      <span className="emoji">{checked ? emoji(emoji1) : emoji(emoji2)}</span>
    </span>
  </label>
);

const ToggleSwitch = () => {
  const {isDark} = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isDark);
  const styleContext = useContext(StyleContext);

  const handleChange = () => {
    styleContext.changeTheme();
    setChecked(!isChecked);
  };

  return (
    <SwitchComponent
      checked={isChecked}
      onChange={handleChange}
      emoji1="🌜"
      emoji2="☀️"
    />
  );
};

const LangSwitch = () => {
  const {isEn} = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isEn);
  const styleContext = useContext(StyleContext);

  const handleChange = () => {
    styleContext.changeLanguage();
    setChecked(!isChecked);
  };

  return (
    <SwitchComponent
      checked={isChecked}
      onChange={handleChange}
      emoji1="🇺🇸"
      emoji2="🇨🇳"
    />
  );
};

export {ToggleSwitch, LangSwitch};
