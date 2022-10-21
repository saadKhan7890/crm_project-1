import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

if(!localStorage.getItem('is_theme_dark')){
  localStorage.setItem('is_theme_dark', 'false')
}
var isDarkTheme = localStorage.getItem('is_theme_dark')

export default new Vuetify({
  theme: {
    dark: (isDarkTheme==='false'?false:true),
    themes: {
    //   light: {
    //     primary: '#0e7b75',
    //     secondary: '#424242',
    //     accent: '#82B1FF',
    //     error: '#FF5252',
    //     info: '#2196F3',
    //     success: '#4CAF50',
    //     warning: '#FFC107',
    //     anchor: '#0e7b75',
    //       },
      light: {
        primary:    '#004ed0',
        secondary:  '#424242',
        accent:     '#82B1FF',
        error:      '#FF5252',
        info:       '#2196F3',
        success:    '#4CAF50',
        warning:    '#FFC107',
        anchor: '#5092ff',
      },
      dark: {
        primary: '#004ed0',
        anchor: '#5092ff',
      },
    },
  },
});
