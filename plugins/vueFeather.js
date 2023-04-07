import VueFeather from 'vue-feather';
import Breadcrumbs from '../components/bread_crumbs.vue';

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.component('vue-feather',VueFeather)
nuxtApp.vueApp.component('Breadcrumbs',Breadcrumbs)

   

})
