<template>
  <div class="translate_wrapper " :class="{'active' :isActive}">
    <div class="current_lang">
        <div class="lang"><i class="flag-icon" :class="langIcon"></i><span :class="lang-txt" @click="display()">{{ langLangauge }}</span></div>
    </div>
    
        <div class="more_lang" :class="{'active' :isActive}">
            <!-- <select v-model="$i18n.locale">
                <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
              </select> -->
            <div class="lang" v-for="locale in availableLocales" :key="locale.code">
                <nuxt-link :to="switchLocalePath(locale.code)"> <i class="flag-icon" :class="locale.icon"></i><span class="lang-txt" @click="changeLocale(locale)" >{{locale.name}}<span>{{locale.short}} </span></span></nuxt-link>
            </div>
             <!-- <Nuxt-link v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)" >

                    {{ locale.name }}
                    
                  </Nuxt-link> -->
        </div>
    
</div>
</template>
<script>
// import { mapGetters } from 'vuex';
import { useLanguageStore } from '~~/store/language';
// import {localeOptions} from '../../constants/config';

export default {
    name: 'languagePage',
    data() {
        return {
            isActive:false,
            // localOptions: localeOptions,
            // langIcon : localStorage.getItem('currentLanguageIcon') || 'flag-icon-us',
            // langLangauge : localStorage.getItem('currentLanguage') || 'EN'
        };
    },
    methods: {
        display() {
            this.isActive = !this.isActive
        },
       
   
      changeLocale(locale) {
        // this.$i18n.locale =locale.id
        // this.$i18n.locale =locale.icon
        //  this.$store.dispatch('setLang',locale);
        //  
useLanguageStore().changeLang(locale)
      
      },
    },
computed:{
  langIcon(){
    return useLanguageStore().langIcon1
  },
  langLangauge(){
    return useLanguageStore().langLangauge1
  }
    // ...mapGetters({
    //     langIcon : 'langIcon',
    //     langLangauge: 'langLangauge'
    // })
},
mounted(){
    // this.$store.dispatch('setLang',{id:localStorage.getItem('currentLanguage')||'EN',icon:localStorage.getItem('currentLanguageIcon')||'flag-icon-us'})
    useLanguageStore().changeLang({code:localStorage.getItem('currentLanguage')||'EN',icon:localStorage.getItem('currentLanguageIcon')||'flag-icon-us'})
},
setup(){
  const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})
return{
  switchLocalePath,availableLocales
}
 }
}
</script>
