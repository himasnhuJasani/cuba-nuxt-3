<template>
  
    <div class="tap-top" :style="[display ? {'display':'block'} : { 'display':'none'} ]">
      <vue-feather type="chevrons-up" @click="executeScroll()"></vue-feather>
    </div>
   
  </template>
  
  <script>
  import { useWindowScroll } from '@vueuse/core';
    export default {
      name: 'TapTop',
      data() {
        return {
          display: false,
          scrolled: useWindowScroll().y
        };
      },
      created() {
        
        // window.addEventListener('scroll', this.handleScroll);
      },
      unmounted() {
        // window.removeEventListener('scroll', this.handleScroll);
      },
      watch:{
          scrolled(){
           this.handleScroll()
            
          }
      },
      methods: {
        executeScroll() {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        },
        handleScroll() {
          if (this.scrolled > 200) {
            this.display = true;
          } else {
            this.display = false;
          }
        },
      },
    };
  </script>
  
  <style></style>
  