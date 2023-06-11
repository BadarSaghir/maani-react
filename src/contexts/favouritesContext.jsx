import { createContext, useState } from "react";
import { themes} from "../constant/theme";
import PropTypes from "prop-types";

/**
 * @type {import('react').Context<{favourities: string[], setfavourities: (arg0: string[]) => string[],isOpen:boolean,setIsOpen: (arg0: boolean) => void}>} ThemeContext
 */
export const FavouritiesContext = createContext();

/**
 *
 * @param {import("react").PropsWithChildren} {children}
 *
 */
export function FavouritiesContextProvider({ children }) {
  const [favourities,setfavourities]=useState(themes.light)
  const [isOpen,setIsOpen]=useState(false)

  return (
    <FavouritiesContext.Provider value={{favourities,setfavourities,isOpen,setIsOpen}}>
      {children}
    </FavouritiesContext.Provider>
  );
}
FavouritiesContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default FavouritiesContext;
