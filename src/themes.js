import { colors } from "./mcolors";

export function cDarkTheme() {
    const darkTheme = {
        dark: false,
        light: false,
        colors:{
            //for backgrounds
            primary:colors.greyBlue.darken4,
            primary2:colors.greyBlue.darken3,
            //headers and more brand color
            secondary:colors.lightGreen.accent3,
            //call for click me, interact with me
            accent:colors.deepOrange.accent3,
            //semantic colors
            success:colors.green.accent4, info:colors.yellow.accent3, warning:colors.orange.accent4, error:colors.red.darken4,
            //secondary color triadic scheme
            triadic1:colors.amber.darken4, triadic2:colors.deepPurple.darken4,
            //secondary color analogous scheme
            analogous1:colors.shades.teal, analogous2:colors.shades.blue,
            //secondary color tetradic scheme
            tetradic1:colors.indigo.darken4, tetradic2:colors.shades.orange, tetradic3:colors.amber.darken3,
            //accessibility
            textOnLight:colors.shades.black, textOnDark:colors.shades.white,
        }
    };
    return darkTheme;

}
export function cLightTheme() {
    const darkTheme = {
        dark: false,
        light: false,
        colors:{
            //for backgrounds
            primary:colors.grey.lighten5,
            primary2:colors.grey.lighten3,
            //headers and more brand color
            secondary:colors.lightGreen.accent3,
            //call for click me, interact with me
            accent:colors.deepOrange.accent3,
            //semantic colors
            success:colors.green.accent4, info:colors.yellow.accent3, warning:colors.orange.accent4, error:colors.red.darken4,
            //secondary color triadic scheme
            triadic1:colors.amber.darken4, triadic2:colors.deepPurple.darken4,
            //secondary color analogous scheme
            analogous1:colors.shades.teal, analogous2:colors.shades.blue,
            //secondary color tetradic scheme
            tetradic1:colors.indigo.darken4, tetradic2:colors.shades.orange, tetradic3:colors.amber.darken3,
            //accessibility
            textOnLight:colors.shades.black, textOnDark:colors.shades.white,
        }
    };
    return darkTheme;

}