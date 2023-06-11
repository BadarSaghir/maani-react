import {themes} from "./theme"
/* Theme Buttons Constants*/

export const darkThemeButton={
    label:"Dark Mode",
    theme:themes.dark,
    value:themes.dark,
    icon:''   
}

export const lightThemeButton={
    label:"Light Mode",
    theme:themes.light,
    value:themes.light,
    icon:''   
}

export const favouriteButton={
    label:"Favourites",
    value:'favourites',
    icon:''   
}


export const navThemeButton=[darkThemeButton,lightThemeButton]
