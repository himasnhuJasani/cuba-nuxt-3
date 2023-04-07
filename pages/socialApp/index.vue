<template>
    <Breadcrumbs title="Social App" main="App" />
    <div class="container-fluid">
            <div class="user-profile social-app-profile ">
              <div class="row"> 
                 <socialHeader/> 
              </div>
            </div>
            
            <div class="tab-content" id="top-tabContent">
            <timLine/>
          
          <div class="tab-pane fade" :class="{'show active': showtab == 'about' }" id="about" role="tabpanel" aria-labelledby="about">
              <indexAbout />
          </div>
          <div class="tab-pane fade" :class="{'show active': showtab == 'friends' }" id="friends" role="tabpanel" aria-labelledby="friends">
              <friends />
          </div>
          <div class="tab-pane fade" :class="{'show active': showtab == 'photos' }" id="photos" role="tabpanel" aria-labelledby="photos">
              <photos />
          </div>
              </div>

    </div>
</template>
<script>
import timLine from "./timeline/index.vue"
import socialHeader from "./headerPage.vue"
import indexAbout from "../socialApp/about/indexAbout.vue"
import friends from "./friendsPage.vue"
import photos from "./photosPage.vue"
export default {
    components:{
        socialHeader,
        timLine,
        indexAbout,
        friends,
        photos
    }
}
</script>