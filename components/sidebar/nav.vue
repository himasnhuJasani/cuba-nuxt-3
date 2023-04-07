<template>
      <nav class="sidebar-main" id="sidebar-main">
        <div class="left-arrow" id="left-arrow">
        <li
          class="left-arrow"
          :class="{'d-none': layout.settings.layout_type =='rtl'? hideLeftArrowRTL: hideLeftArrow }"
          @click="(layoutobject.split(' ').includes('horizontal-wrapper') && layout.settings.layout_type==='rtl') ? scrollToLeftRTL() : scrollToLeft()"
        >
          <vue-feather type="arrow-left"></vue-feather>
        </li></div>
        <Navmenu />
        <li
          class="right-arrow"
          :class="{'d-none': layout.settings.layout_type=='rtl'? hideRightArrowRTL : hideRightArrow }"
          @click="(layoutobject == 'horizontal_sidebar' && layout.settings.layout_type=='rtl') ? scrollToRightRTL() : scrollToRight()"
        >
          <vue-feather type="arrow-right"></vue-feather>
        </li>
      </nav>
</template>
<script>
  import { mapState } from 'pinia';
  import { layoutClasses } from '../../constants/layout';
  import Navmenu from './navmenu.vue';
import { useMenuStore } from '~~/store/menu';
import { useLayoutStore } from '~~/store/layout';

  
  export default {
    name: 'Nav',
    components : {
      Navmenu
    },
    data() {
      return {
        layoutobj:{}	
      };
    },
    computed: {
      ...mapState(useMenuStore,{
        
        hideRightArrowRTL: 'hideRightArrowRTL',
        hideLeftArrowRTL: 'hideLeftArrowRTL',
        hideRightArrow: 'hideRightArrow',
        hideLeftArrow: 'hideLeftArrow',
        width: 'width',
        height: 'height',
        margin: 'margin',
        menuWidth: 'menuWidth',
      }),
      ...mapState(useLayoutStore,{
        layout:'layout',
      }),
      layoutobject: {	
        get: function () {	
          return JSON.parse(JSON.stringify(layoutClasses.find((item) => Object.keys(item).pop() === this.layout.settings.layout)))[this.layout.settings.layout];	
        },	
        set: function () {	
          this.layoutobj = layoutClasses.find((item) => Object.keys(item).pop() === this.layout.settings.layout);	
          this.layoutobj = JSON.parse(JSON.stringify(this.layoutobj))[this.layout.settings.layout];	
          return this.layoutobj;	
        }	
      }
    }, 
    watch: {
      layoutobject() {
        setTimeout(()=> {
          const elmnt = document.getElementById('myDIV');
          // useMenuStore().menuWidth = elmnt.offsetWidth;
          useMenuStore().menuWidth = elmnt.offsetWidth
        }, 500);
      }
    },
    methods: {
      scrollToRightRTL() {
        this.temp = useMenuStore().width + useMenuStore().margin;
        // Checking condition for remaing margin
        if (this.temp === 0) {
          useMenuStore().margin = this.temp;
          useMenuStore().hideRightArrowRTL = false; 
        } else {
          useMenuStore().margin += useMenuStore().width;
          useMenuStore().hideRightArrowRTL = false; 
          useMenuStore().hideLeftArrowRTL = false; 
        }
      },
      scrollToLeftRTL() {
        // If Margin is reach between screen resolution
        if (useMenuStore().margin <= -useMenuStore().width) {
          useMenuStore().margin += -useMenuStore().width;
          useMenuStore().hideLeftArrowRTL = true; 
        } else {
          useMenuStore().margin += -useMenuStore().width;
          useMenuStore().hideRightArrowRTL = false; 
          useMenuStore().activeoverlay = false;
        }
      },
      scrollToLeft() {
        // If Margin is reach between screen resolution
        if (useMenuStore().margin >= -useMenuStore().width) {
          useMenuStore().margin = 0;
          useMenuStore().hideLeftArrow = true; 
        } else {
          useMenuStore().margin += useMenuStore().width;
          useMenuStore().hideRightArrow = false; 
        }
      },
      //   scrollToRight() {
      //     this.temp = useMenuStore().menuWidth + useMenuStore().width;
      //     // Checking condition for remaing margin
      //     if (this.temp > useMenuStore().menuWidth) {
      //       useMenuStore().margin = -this.temp;
      //       useMenuStore().hideRightArrow = true;
      //     } else {
      //       useMenuStore().margin += -useMenuStore().width;
      //       useMenuStore().hideLeftArrow = false;
      //     }
      //   }
      // scrollToRight() {
      //   this.temp = useMenuStore().menuWidth + useMenuStore().margin;
      //   // Checking condition for remaing margin
      //   if (this.temp >useMenuStore().menuWidth) {
      //     useMenuStore().margin = -this.temp;
      //   } else {
      //     useMenuStore().margin += -useMenuStore().width;
      //     useMenuStore().hideLeftArrow = false; 
      //     if(useMenuStore().margin <= -4689) {
      //       useMenuStore().hideRightArrow = true; 
      //     }
      //   }
      // }
      scrollToRight() {
        this.temp = useMenuStore().width - useMenuStore().margin;
        // Checking condition for remaing margin
        if (this.temp + useMenuStore().width > useMenuStore().menuWidth) {
          useMenuStore().margin = -this.temp;
          useMenuStore().hideRightArrow = true;
        } else {
          useMenuStore().margin += -useMenuStore().width;
          useMenuStore().hideLeftArrow = false;
        }
      }
    }
  };
</script>
