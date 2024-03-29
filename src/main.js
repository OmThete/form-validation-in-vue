import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import 'primevue/resources/primevue.min.css'; 
import 'primevue/resources/themes/saga-blue/theme.css';

const app = createApp(App);
app.use(PrimeVue);
app.use(ToastService);

app.mount('#app');
