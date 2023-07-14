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
import {cDarkTheme, cLightTheme} from '../themes'
const cDark = cDarkTheme();
const cLight = cLightTheme();
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

export default createVuetify({
  theme: {
    themes: {
      dark1:cDark,
      light1: cLight,
    },
  },

})
