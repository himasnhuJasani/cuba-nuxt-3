<template>
    <div class="fade tab-pane" v-bind:class="(activeclass==='pills_business') ? 'active show': ''" id="pills-buisness" role="tabpanel" aria-labelledby="pills-business-tab">
        <div class="card mb-0">
            <div class="card-header d-flex">
                <h6 class="f-w-600 mb-0">Buisness</h6>
                <ul>
                    <li>
                        <a class="grid-bookmark-view" href="#">
                            <vue-feather type="grid"></vue-feather>
                        </a>
                    </li>
                    <li>
                        <a class="list-layout-view" href="#">
                            <vue-feather type="list"></vue-feather>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="card-body">
                <div class="details-bookmark text-center">
                    <span>No Bookmarks Found.</span>
                </div>
            </div>
        </div>
    </div>
    <div class="fade tab-pane" v-bind:class="(activeclass==='pills_holiday') ? 'active show': ''" id="pills-holiday" role="tabpanel" aria-labelledby="pills-holiday-tab">
        <div class="card mb-0">
            <div class="card-header d-flex">
                <h6 class="f-w-600 mb-0">Holiday</h6>
                <ul>
                    <li>
                        <a class="grid-bookmark-view" href="#">
                            <vue-feather type="grid"></vue-feather>
                        </a>
                    </li>
                    <li>
                        <a class="list-layout-view" href="#">
                            <vue-feather type="list"></vue-feather>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="card-body">
                <div class="details-bookmark text-center">
                    <span>No Bookmarks Found.</span>
                </div>
            </div>
        </div>
    </div>
    </template>
    <script>
    import {  mapState } from 'pinia';
    import { useCommonStore } from '~~/store/common'
    
    export default{
        
        data(){
        return {
          liststyle: false,
          data : [],
       
          favourite : useCommonStore().favourite,
          filtered: false,
        };
      },
      computed: {
        ...mapState(useCommonStore,{
      bookmark: 'bookmark',
    }),
    // ...mapGetters({
    //   activeclass: 'common/activeclass',  
    // }),
    activeclass(){
      return useCommonStore().activeclass1
    }
      },
      methods:{
        getImgUrl(path) {
      return ('/images/'+path);
    },
    say: function (message) {
      // this.$store.dispatch('common/active',message);
      useCommonStore().active(message)
    },
     collapseFilter() {
      this.filtered = !this.filtered;
    },
    setFavourite(item) {
      // this.$store.dispatch('common/setFavourite',item)
      useCommonStore().setFavourite(item)
    },
    getActive(itemId) {
    //  this.$store.dispatch('common/getActive', itemId)
    useCommonStore().getActive(itemId)
    }
      },
    }
    </script>