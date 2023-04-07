<template>
        <div id="sidebar-menu">
     
          <ul class="sidebar-links custom-scrollbar" id="myDIV"
          :style="[layoutobject.split(' ').includes('horizontal-wrapper')  ? layout.settings.layout_type=='rtl'? {'margin-right': margin+'px'} : {'margin-left': margin+'px'} :  { margin : '0px'}]"
          >
            <li class="back-btn">
              <router-link to="/">
                <img
                  class="img-fluid"
                  src="../../assets/images/logo/logo-icon.png"
                  alt=""
              /></router-link>
              <div class="mobile-back text-end">
                <span>Back</span
                ><i class="fa fa-angle-right ps-2" aria-hidden="true"></i>
              </div>
            </li>
           <li
                v-for="(menuItem, index) in menuItems"
                :key="index"
                :class="{ 'sidebar-main-title' : menuItem.type == 'headtitle'}"
                class="sidebar-list hoverd"
              >
                <!-- link title -->
                <div v-if="menuItem.type == 'headtitle'">
                  <h6 class="lan-1">{{$t (menuItem.headTitle1) }}</h6>
                  <!-- <p class="lan-2">{{ (menuItem.headTitle2) }}</p> -->
                </div>
                <!-- Sub -->
                <label
                      :class="'badge badge-'+menuItem.badgeType"
                      v-if="menuItem.badgeType"
                    >{{ (menuItem.badgeValue) }}</label>
                    <a
                  href="javascript:void(0)"
                  class="sidebar-link sidebar-title"
                  :class="{'active': menuItem.active}"
                  v-if="menuItem.type == 'sub' "
                  @click="setNavActive(menuItem, index)"
                >
                <svg class="stroke-icon">
                  <use :xlink:href="('/svg/icon-sprite.svg')+`#${menuItem.icon}`"></use>
                </svg>
                <svg class="fill-icon">
                  <use :xlink:href="('/svg/icon-sprite.svg')+`#${menuItem.iconf}`"></use>
                </svg>
                  <!-- <feather :type="menuItem.icon" class="top"></feather> -->
                  <span class="lan-3">
                    {{ $t(menuItem.title) }}
                  </span>
                  <div class="according-menu" v-if="menuItem.children">
                    <i class="fa fa-angle-right pull-right" ></i>
                  </div>
                </a>
                <!-- Link -->
                <router-link
                  :to="menuItem.path"
                  class="sidebar-link sidebar-title"
                  v-if="menuItem.type == 'link'"
                  :class="{'active': menuItem.active}"
                   v-on:click="hidesecondmenu()"
                   @click="setNavActive(menuItem, index)"
                >
                <svg class="stroke-icon">
                  <use :xlink:href="('/svg/icon-sprite.svg')+`#${menuItem.icon}`"></use>
                </svg>
                <svg class="fill-icon">
                  <use :xlink:href="('/svg/icon-sprite.svg')+`#${menuItem.iconf}`"></use>
                </svg>
                  <!-- <feather :type="menuItem.icon" class="top"></feather> -->
                  <span>
                    {{$t(menuItem.title) }}
                  </span>
                  <i class="fa fa-angle-right pull-right" v-if="menuItem.children"></i>
                </router-link>
                <!-- External Link -->
                <a
                  :href="menuItem.path"
                  class="sidebar-link sidebar-title"
                  v-if="menuItem.type == 'extLink'"
                  @click="setNavActive(menuItem, index)"
                >
                <svg class="stroke-icon">
                  <use :xlink:href="('/svg/icon-sprite.svg')+`#${menuItem.icon}`"></use>
                </svg>
                <svg class="fill-icon">
                  <use :xlink:href="('/svg/icon-sprite.svg')+`#${menuItem.iconf}`"></use>
                </svg>
                  <!-- <feather :type="menuItem.icon" class="top"></feather> -->
                  <span>
                    {{$t (menuItem.title) }}
                  </span>
                  <i class="fa fa-angle-right pull-right" v-if="menuItem.children"></i>
                </a>
                <!-- External Tab Link -->
                <a
                  :href="menuItem.path"
                  target="_blank"
                  class="sidebar-link sidebar-title"
                  v-if="menuItem.type == 'extTabLink'"
                  @click="setNavActive(menuItem, index)"
                >
                  <!-- <feather :type="menuItem.icon" class="top"></feather> -->
                  <svg class="stroke-icon">
                    <use :xlink:href="('/svg/icon-sprite.svg')+`#${menuItem.icon}`"></use>
                  </svg>
                  <svg class="fill-icon">
                    <use :xlink:href="('/svg/icon-sprite.svg')+`#${menuItem.iconf}`"></use>
                  </svg>
                  <span>
                    {{$t (menuItem.title) }}
                  </span>
                  <i class="fa fa-angle-right pull-right" v-if="menuItem.children"></i>
                </a>
                <!-- 2nd Level Menu -->
                <ul class="sidebar-submenu" v-if="menuItem.children" :class="{ 'menu-open': menuItem.active }" :style="{display:menuItem.active?'':'none'}">
                  <li
                    v-for="(childrenItem, index) in menuItem.children"
                    :key="index"
                    
                  >
                    <!-- Sub -->
                    <a
                      class="lan-4"
                      :class="{'active': childrenItem.active}"
                      href="javascript:void(0)"
                      v-if="childrenItem.type == 'sub'"
                      @click="setNavActive(childrenItem, index)"
                    >
                      {{$t (childrenItem.title) }}
                      <label
                        :class="'badge badge-'+childrenItem.badgeType+' pull-right'"
                        v-if="childrenItem.badgeType"
                      >{{childrenItem.badgeValue}}</label>
                      <i class="fa pull-right mt-1" v-bind:class="[childrenItem.active ? 'fa fa-angle-down' : 'fa fa-angle-right']" v-if="childrenItem.children"></i>
                    </a>
                    <!-- Link -->
                    <router-link
                      class="lan-4"
                      :class="{'active': childrenItem.active}"
                      :to="childrenItem.path"
                      v-if="childrenItem.type == 'link'"
                      @click="setNavActive(childrenItem, index)"
                      v-on:click="hidesecondmenu()"
                    >
                      {{ $t(childrenItem.title) }}
                      <label
                        :class="'badge badge-'+childrenItem.badgeType+' pull-right'"
                        v-if="childrenItem.badgeType"
                      >{{ (childrenItem.badgeValue) }}</label>
                      <i class="fa fa-angle-right pull-right mt-1" v-if="childrenItem.children"></i>
                    </router-link>
                    <!-- External Link -->
                    <a :href="childrenItem.path" v-if="childrenItem.type == 'extLink'" class="submenu-title">
                      {{ (childrenItem.title) }}
                      <label
                        :class="'badge badge-'+childrenItem.badgeType+' pull-right'"
                        v-if="childrenItem.badgeType"
                      >{{ $t(childrenItem.badgeValue) }}</label>
                      <i class="fa fa-angle-right pull-right mt-1" v-if="childrenItem.children"></i>
                    </a>
                    <!-- External Tab Link -->
                    <a
                    class="submenu-title"
                      :href="childrenItem.path"
                      target="_blank"
                      v-if="childrenItem.type == 'extTabLink'"
                    >
                      {{ $t(childrenItem.title) }}
                      <label
                        :class="'badge badge-'+childrenItem.badgeType+' pull-right'"
                        v-if="childrenItem.badgeType"
                      >{{ (childrenItem.badgeValue) }}</label>
                      <i class="fa fa-angle-right pull-right mt-1" v-if="childrenItem.children"></i>
                    </a>
                    <!-- 3rd Level Menu -->
                    <ul class="nav-sub-childmenu submenu-content" v-if="childrenItem.children" :class="{ 'opensubchild': childrenItem.active }">
                      <li v-for="(childrenSubItem, index) in childrenItem.children" :key="index">
                        <!-- Link -->
                        <router-link
                          :to="childrenSubItem.path"
                          v-if="childrenSubItem.type == 'link'"
                          router-link-exact-active
                          exact v-on:click="hidesecondmenu()"
                        >
                          {{ $t(childrenSubItem.title) }}
                          <label
                            :class="'badge badge-'+childrenSubItem.badgeType+' pull-right'"
                            v-if="childrenSubItem.badgeType"
                          >{{ (childrenSubItem.badgeValue) }}</label>
                          <i class="fa fa-angle-right pull-right" v-if="childrenSubItem.children"></i>
                        </router-link>
                        <!-- External Link -->
                        <router-link
                          :to="childrenSubItem.path"
                          v-if="childrenSubItem.type == 'extLink'"
                          router-link-exact-active
                        >
                          {{ $t(childrenSubItem.title) }}
                          <label
                            :class="'badge badge-'+childrenSubItem.badgeType+' pull-right'"
                            v-if="childrenSubItem.badgeType"
                          >{{ (childrenSubItem.badgeValue) }}</label>
                          <i class="fa fa-angle-right pull-right" v-if="childrenSubItem.children"></i>
                        </router-link>
                        <!-- External Tab Link -->
                        <router-link
                          :to="childrenSubItem.path"
                          v-if="childrenSubItem.type == 'extLink'"
                          router-link-exact-active
                        >
                          {{ $t(childrenSubItem.title) }}
                          <label
                            :class="'badge badge-'+childrenSubItem.badgeType+' pull-right'"
                            v-if="childrenSubItem.badgeType"
                          >{{ (childrenSubItem.badgeValue) }}</label>
                          <i class="fa fa-angle-right pull-right" v-if="childrenSubItem.children"></i>
                        </router-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
          </ul>
        </div>
</template>
<script>
  import { mapState } from 'pinia';
import { useLayoutStore } from '~~/store/layout';
import { useMenuStore } from '~~/store/menu';
  import { layoutClasses } from '../../constants/layout';
import { useWindowScroll } from '@vueuse/core'

  
  export default {
    name: 'Navmenu',
    data() {
      return {
        layoutobj:{},
        scrolled: useWindowScroll().x,
        rolled:useWindowScroll().y
      };
    },
    computed: {
      ...mapState(useMenuStore,{
        menuItems: 'data',
       
        activeoverlay: 'activeoverlay',
        togglesidebar: 'togglesidebar',
        width: 'width',
        height: 'height',
        margin: 'margin',
        menuWidth: 'menuWidth',
      
      }),
      ...mapState(useLayoutStore,{
        layout: 'layout',
        sidebar: 'sidebarType',
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
      scrolled(){
        this.handleResize()
      },
      rolled(){
        this.handleScroll()
      },
      width() {
       
        // window.addEventListener('resize', this.handleResize);
        this.handleResize();
        // window.addEventListener('scroll',this.handleScroll);
        this.handleScroll(); 
        if (useWindowScroll().x< 992) {
          const newlayout = JSON.parse(JSON.stringify(this.layoutobject).replace('horizontal-wrapper', 'compact-wrapper'));
          document.querySelector('.page-wrapper').className = 'page-wrapper ' + newlayout;
         useMenuStore().margin = 0;
        } else {
          document.querySelector('.page-wrapper').className = 'page-wrapper ' + this.layoutobject;
        }

        if((useWindowScroll().x< 1199 && this.layout.settings.layout === 'Tokyo') || (useWindowScroll().x < 1199 && this.layout.settings.layout === 'Moscow') || (useWindowScroll().x< 1199 && this.layout.settings.layout === 'Rome')) {
          this.menuItems.filter(menuItem => {
            menuItem.active = false;
          });
        }
      }
    },
    created() {
      // window.addEventListener('resize', this.handleResize);
      this.handleResize();
      if (useMenuStore().width < 991) {
        this.layout.settings.layout = 'Dubai';	
        this.margin = 0;
      }
      setTimeout(()=> {
        const elmnt = document.getElementById('myDIV');
       useMenuStore().menuWidth = elmnt.offsetWidth;
       useMenuStore().menuWidth > useWindowScroll().x  ? 
          (useMenuStore().hideRightArrow = false,useMenuStore().hideLeftArrowRTL = false) : 
          (useMenuStore().hideRightArrow = false,useMenuStore().hideLeftArrowRTL = true);
      }, 500);
      this.layoutobject = layoutClasses.find((item) => Object.keys(item).pop() === this.layout.settings.layout);	
      this.layoutobject = JSON.parse(JSON.stringify(this.layoutobject))[this.layout.settings.layout];
    },
    // destroyed() {
    //   if (process.client) {
    //   window.removeEventListener('resize', this.handleResize);
    // }},
    mounted() {   
      this.menuItems.filter(items => {
        if (items.path === this.$route.path)
          // this.$store.dispatch('menu/setActiveRoute', items);
          useMenuStore().setActiveRoute(items)
        if (!items.children) return false;
        items.children.filter(subItems => {
          if (subItems.path === this.$route.path)
            // this.$store.dispatch('menu/setActiveRoute', subItems);
          useMenuStore().setActiveRoute(subItems)

          if (!subItems.children) return false;
          subItems.children.filter(subSubItems => {
            if (subSubItems.path === this.$route.path)
              // this.$store.dispatch('menu/setActiveRoute', subSubItems);
          useMenuStore().setActiveRoute(subSubItems)

          });
        });
      });
    },
    methods: {
      handleScroll() {
        if (process.client) {
        if(useWindowScroll().y > 400){
          if(this.layoutobject.split(' ').pop() === 'material-type' || this.layoutobject.split(' ').pop() ==='advance-layout')
            document.querySelector('.sidebar-main').className = 'sidebar-main hovered';
        }else{
          if(document.getElementById('sidebar-main'))
            document.querySelector('.sidebar-main').className = 'sidebar-main';
        }
      }},
      setNavActive(item) {
        // this.$store.dispatch('menu/setNavActive', item);
        useMenuStore().setNavActive(item)
        
        if(this.layoutobject.split(' ').includes('compact-sidebar') &&  useWindowScroll().x > 991) {
          if(this.menuItems.some(menuItem => menuItem.active === true)) {
           useMenuStore().activeoverlay = true;
          } else {
           useMenuStore().activeoverlay = false;
          }
        }
      },
      hidesecondmenu() {
        if(useWindowScroll().x < 991) {
         useMenuStore().activeoverlay = false,
         useMenuStore().togglesidebar = false;
          this.menuItems.filter(menuItem => {
            menuItem.active = false;
          });
        } else if(this.layoutobject.split(' ').includes('compact-sidebar')){
         useMenuStore().activeoverlay = false,
          this.menuItems.filter(menuItem => {
            menuItem.active = false;
          });
        }
      },
      handleResize() {
       useMenuStore().width = useWindowScroll().x - 450;
      },
    }
  };
</script>
