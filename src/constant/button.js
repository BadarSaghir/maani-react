import {themes} from "./theme"
/* Theme Buttons Constants*/

export const darkThemeButton={
    label:"Dark Mode",
    theme:themes.dark,
    value:themes.dark,
}

export const lightThemeButton={
    label:"Light Mode",
    theme:themes.light,
    value:themes.light,

}

export const favouriteButton={
    label:"Favourites",
    value:'favourites',

}


export const navThemeButton=[darkThemeButton,lightThemeButton]
