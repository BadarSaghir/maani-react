import { createContext } from "react";
import { theme } from "../constant/theme";
import PropTypes from "prop-types";

export const ThemeContext = createContext(theme.light);

/**
 *
 * @param {import("react").PropsWithChildren} {children}
 *
 */
export function ThemeContextProvider({ children }) {
  return (
    <ThemeContext.Provider value={theme.light}>
      {children}
    </ThemeContext.Provider>
  );
}
ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ThemeContext;
