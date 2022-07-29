// HTML app
// ====================
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
import { numberOfShapes } from './module'
app.provide('foo', numberOfShapes)
app.mount('#app')

// Lunchbox app
// ====================
import { createApp as createLunchboxApp } from 'lunchboxjs'
import LunchboxApp from './Lunchbox.vue'
createLunchboxApp(LunchboxApp).mount('#lunchbox')
