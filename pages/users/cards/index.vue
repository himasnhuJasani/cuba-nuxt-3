<template>
<Breadcrumbs title="User Cards" main="User"  />
<!-- Container-fluid starts-->
<div class="container-fluid ">
    <div class="row">
       <card1/>
       <card2/>
       <card3/>
       <card4/>
    </div>
</div>
<!-- Container-fluid Ends-->
</template>

<script>
import card1 from './card1.vue';
import card2 from './card2.vue';
import card3 from './card3.vue';
import card4 from './card4.vue';
export default {
    name: 'userCards',
    components:{
card1,card2,card3,card4
    }
  
}
</script>
