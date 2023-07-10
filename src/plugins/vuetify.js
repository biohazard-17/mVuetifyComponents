/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'


// Composables
import { createVuetify } from 'vuetify'
import colors from 'vuetify/lib/util/colors'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme:"dark1",
    themes: {
      dark1:{
        light:false,
        dark:false,
        colors:{
          background: "#263238",  /*blue-grey-darken-4*/
          bg1:"#111",             /*grey-darken5*/
          /**tetradic scheme */
          accent: "#76FF03",      /*light-green-accent-3*/
          accent2: "#00B0FF",     /*light-blue-accent-3*/
          accent3: "#D50000",     /*red-accent4 */
          accent4: "#FF6F00",     /*amber-darken4 */
          /**triadic scheme */
          triadic2:"#4A148C",     /*purple-darken-4*/
          triadic3:"#FFD600",     /*yellow-accent-4 */
          /**analogous */ 
          analogous2:"#304FFE",   /*indigo-accent4 */
          analogous3:"#004D40",   /*teal-darken-4 */
          text: "#212121",        /*grey-darken-4*/
          text2:"#EEEEEE",          /*grey-lighten-3*/
          complementary: "#FF3D00",/*deep-orange-accent-3*/
          error: "#D50000",       /*red-accent-4*/
          info: "#FFEA00",        /*yellow-accent-3*/
        }
      }
    },
  },
  
})
