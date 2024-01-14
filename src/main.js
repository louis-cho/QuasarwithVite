import { createApp } from 'vue'
import { Quasar, Loading } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {
    Loading
  }, // import Quasar plugins and add here

  config: {
    loading: {}
  }
})

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')