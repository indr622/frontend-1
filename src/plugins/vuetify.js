import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
     theme: {
          dark: false,
          themes: {
               light: {
                    primary: "#4782DA",
                    accent: "#82B1FF",
                    error: "#FF5252",
                    info: "#2196F3",
                    success: "#017D15",
                    secondary: "#898F99",
                    warning: "#FFC107",
                    lightblue: "#14c6FF",
                    yellow: "#FFCF00",
                    pink: "#FF1976",
                    orange: "#FF8657",
                    magenta: "#C33AFC",
                    darkblue: "#233044",
                    gray: "#909090",
                    neutralgray: "#9BA6C1",
                    green: "#2ED47A",
                    red: "#FF5c4E",
                    darkblueshade: "#308DC2",
                    lightgray: "#BDBDBD",
                    lightpink: "#FFCFE3",
                    white: "#FFFFFF",
                    dark: "#898F99",
                    content: "#F7F9FC",
                    navbar: "#233044",
                    darknavbar: "#1E293A",
                    main: "#376FD0",
                    lightmain: "#DAE3F3",
                    lightsuccess: "#CFF3D5",
                    danger: "#C50028",
                    lightdanger: "#FFD4DC",
                    lightinfo: "#E1D4FF",
               },
               dark: {
                    primary: '#1689E7',
                    accent: '#4CBB99',
                    secondary: '#7BC6FF',
                    success: '#4CAF50',
                    info: '#2196F3',
                    warning: '#FB8C00',
                    error: '#FF5252'
               },

          }
     }
});
