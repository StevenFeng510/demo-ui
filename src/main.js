import Vue from 'vue';
import App from './App.vue';
import OsButton from './components/button.vue';
import OsDialog from './components/dialog.vue';
import OsInput from './components/input.vue';
import OsSwitch from './components/switch.vue';
import OsRadio from './components/radio.vue';
import OsRadioGroup from './components/radio-group.vue';
import OsCheckbox from './components/checkbox.vue';
import OsCheckboxGroup from './components/checkbox-group.vue';
import OsForm from './components/form.vue';
import OsFormItem from './components/form-item.vue';
import './assets/fonts/iconfont.css';

Vue.config.productionTip = false;

Vue.component(OsButton.name, OsButton);
Vue.component(OsDialog.name, OsDialog);
Vue.component(OsInput.name, OsInput);
Vue.component(OsSwitch.name, OsSwitch);
Vue.component(OsRadio.name, OsRadio);
Vue.component(OsRadioGroup.name, OsRadioGroup);
Vue.component(OsCheckbox.name, OsCheckbox);
Vue.component(OsCheckboxGroup.name, OsCheckboxGroup);
Vue.component(OsForm.name, OsForm);
Vue.component(OsFormItem.name, OsFormItem);

new Vue({
    render: (h) => h(App),
}).$mount('#app');
