import Vue from 'vue';
import App from './App.vue';
import OsButton from './components/button.vue';
import OsDialog from './components/dialog.vue';
import './assets/fonts/iconfont.css';

Vue.config.productionTip = false;

Vue.component(OsButton.name, OsButton);
Vue.component(OsDialog.name, OsDialog);

new Vue({
    render: (h) => h(App),
}).$mount('#app');
