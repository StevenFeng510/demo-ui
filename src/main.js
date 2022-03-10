import Vue from 'vue';
import App from './App.vue';
import OsButton from './components/button.vue';

Vue.config.productionTip = false;

Vue.component(OsButton.name, OsButton);

new Vue({
    render: (h) => h(App),
}).$mount('#app');
