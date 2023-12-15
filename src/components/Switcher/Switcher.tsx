// Switcher.js

import Switch from "rc-switch";
import "./index.scss";
import { useTheme } from "../../hooks/useTheme";

const Switcher = () => {
  const { switchMode, changeTheme } = useTheme();

  const mode = !switchMode ? "To Dark " : "To Light";
  
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Switch checked={switchMode} onChange={changeTheme} />
      <span className="mode">{mode}</span>
    </div>
  );
};

export default Switcher;
