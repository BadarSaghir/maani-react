import {themes} from "./theme"
/* Theme Buttons Constants*/

export const DarkThemeButton={
    label:"Dark Mode",
    theme:themes.dark,
    value:themes.dark,
    icon:''   
}

export const LightThemeButton={
    label:"Light Mode",
    theme:themes.light,
    value:themes.light,
    icon:''   
}


export const NavThemeButton=[DarkThemeButton,LightThemeButton]
