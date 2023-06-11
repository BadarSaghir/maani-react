import { useContext, useEffect } from "react";
import { ThemeContext } from "../contexts/themeContext";
import { themes } from "../constant/theme";

export const useThemeChanger = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  useEffect(() => {
      
  })
  function handleTheme(previousTheme) {
    return () => {
        console.log(previousTheme)
      if (theme === themes.dark) {
        setTheme(themes.light);
      } else if(theme === themes.light) {
        setTheme(themes.dark);
      }
    };
  }

  return {
    theme,
    handleTheme,
  };
};

export default useThemeChanger;
