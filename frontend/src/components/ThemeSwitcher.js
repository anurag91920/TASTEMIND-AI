import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, setTheme, themes } = useContext(ThemeContext);

  return (
    <div style={{ margin: "10px" }}>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        {Object.keys(themes).map((key) => (
          <option key={key} value={key}>
            {key.toUpperCase()} THEME
          </option>
        ))}
      </select>
    </div>
  );
}
