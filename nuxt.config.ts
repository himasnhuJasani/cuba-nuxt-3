// https://nuxt.com/docs/api/configuration/nuxt-config
import en from './locales/en.json'
import fr from './locales/fr.json'
import es from './locales/es.json'
import pt from './locales/pt.json'
export default defineNuxtConfig({
  app:{
    head:{
  

      script:[
        {src: 'https://www.paypal.com/sdk/js?client-id=test&currency=USD'},
        {src: 'https://checkout.stripe.com/checkout.js'},      ]
    }
  },
    css: ["@/assets/scss/app.scss"],
    modules:[
        // ["@nuxtjs/axios"],
        // axios: {
        //   baseURL: "/voxo/data/",
        // },
        "@nuxtjs/i18n",
      
        [
        "@pinia/nuxt",
          {
            autoImports: ["defineStore", "acceptHMRUpdate"],
          },
        ],
      
      ],
      i18n: {
        strategy: "prefix_except_default",
        defaultLocale: "en",
        locales: [
          {
            icon:'flag-icon-us', 
            code: "en",
            name: "English",
            short:'(US)',
          },
          {
            icon:'flag-icon-fr',
            code: "fr",
            name: "Français",
          },
          {
            icon:'flag-icon-es',
            code: "es",
            name: "Español",
          },
          {
            icon:'flag-icon-pt',
            short:'(BR)',
            code: "pt",
            name: "Português",
          },
        ],
        vueI18n: {
          legacy: false,
          locale: "en",
          messages: {
            en: en,
            fr: fr,
            es: es,
            pt: pt
            
          },
        },
      },  
      plugins:[
        {src: '~/plugins/plugins.js',mode:'client'},
        {src: './plugins/useBootstrap.client.ts', mode: 'client'},

        // {
        //   src: "~/plugins/mixins.js",
        //   mode: 'client',
        // },
      ],
   
})
