import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '../node_modules/baselayer.css/dist/baselayer.css';
import './style.css';

createApp(App).use(router).mount('#app');
