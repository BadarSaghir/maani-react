import { createContext, useState } from "react";
import { themes} from "../constant/theme";
import PropTypes from "prop-types";

/**
 * @type {import('react').Context<{theme: string, setTheme: (arg0: string) => void}>} ThemeContext
 */
export const ThemeContext = createContext();

/**
 *
 * @param {import("react").PropsWithChildren} {children}
 *
 */
export function ThemeContextProvider({ children }) {
  const [theme,setTheme]=useState(themes.light)
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}
ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ThemeContext;
