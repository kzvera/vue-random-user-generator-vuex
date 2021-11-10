import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faDollarSign, faHandHoldingUsd, faLongArrowAltDown, faCalculator } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import filters from './helpers/filters'

const app = createApp(App);

library.add(faUser, faDollarSign, faHandHoldingUsd, faLongArrowAltDown, faCalculator);
app.component('font-awesome-icon', FontAwesomeIcon);
app.config.productionTip = false;
app.config.globalProperties.$filters = filters;

app.use(store).mount('#app')
