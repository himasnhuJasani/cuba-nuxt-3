<template>
<div class="left-filter">
    <div class="card-body filter-cards-view animate-chk">
        <div class="product-filter" v-for="(item,index) in category" :key="index">
            <h6 class="f-w-600">{{item.title}}</h6>
            <div class="checkbox-animated mt-0" v-for="(child,index) in item.children" :key="index">
                <label class="d-block" :for=child.id >
                    <input class="checkbox_animated" @change="addfilter()" :value="child.name" v-model="applyFilter" :id=child.id type="checkbox" data-original-title="" title="">{{child.name}}
                </label>

            </div>
        </div>

        <div class="product-filter slider-product">
            <h6 class="f-w-600">Colors</h6>
            <div class="color-selector">
                <ul>
                    <li class="active white"></li>
                    <li class="bg-primary" value="yellow" @change="selectColor($event)" :class="{'active': isActive}"></li>
                    <li class="bg-secondary"></li>
                    <li class="bg-success"></li>
                    <li class="bg-warning"></li>
                    <li class="bg-danger"></li>
                    <li class="blue"></li>
                    <li class="red"></li>
                </ul>
            </div>
        </div>
        <div class="product-filter pb-0">
            <h6 class="f-w-600"> Price 
                <input type="range"  :min="min" :max="max"  v-model="start"  @change="setchange()"> </h6>
                <h6 class="f-w-600">New Products</h6>
            <!-- <vue-slider v-model="value" :min="0" :max="800" ref="slider" @change="sliderChange($refs.slider.getValue())">
            </vue-slider> -->
        </div>
        <!-- <carousel> -->
            <div class="product-filter pb-0 new-products">
                <div class="owl-carousel owl-theme" id="testimonial">
                    <swiper
                    :navigation="true"
                    :slides-per-view="1"
                    :space-between="20"
                    :modules="modules"
                    >
                    <swiper-slide>
                    <div class="item">
                        <div class="product-box row">
                          <div class="product-img col-md-5"><img class="img-fluid img-100" src="@/assets/images/ecommerce/01.jpg" alt="" data-original-title="" title=""></div>
                          <div class="product-details col-md-7 text-start"><span><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning"></i></span>
                            <p class="mb-0">Woman T-shirt</p>
                            <div class="product-price">$100.00</div>
                          </div>
                        </div>
                        <div class="product-box row">
                          <div class="product-img col-md-5"><img class="img-fluid img-100" src="@/assets/images/ecommerce/02.jpg" alt="" data-original-title="" title=""></div>
                          <div class="product-details col-md-7 text-start"><span><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning"></i></span>
                            <p class="mb-0">Dream Beauty Fashion</p>
                            <div class="product-price">$150.00</div>
                          </div>
                        </div>
                        <div class="product-box row">
                          <div class="product-img col-md-5"><img class="img-fluid img-100" src="@/assets/images/ecommerce/03.jpg" alt="" data-original-title="" title=""></div>
                          <div class="product-details col-md-7 text-start"><span><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning"></i></span>
                            <p class="mb-0">VOXATI</p>
                            <div class="product-price">$200.00</div>
                          </div>
                        </div>
                      </div>
                    </swiper-slide>
                    <swiper-slide>
                      <div class="item">
                        <div class="product-box row">
                          <div class="product-img col-md-5"><img class="img-fluid img-100" src="@/assets/images/ecommerce/01.jpg" alt="" data-original-title="" title=""></div>
                          <div class="product-details col-md-7 text-start"><span><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning"></i></span>
                            <p class="mb-0">Fancy Shirt</p>
                            <div class="product-price">$100.00</div>
                          </div>
                        </div>
                        <div class="product-box row">
                          <div class="product-img col-md-5"><img class="img-fluid img-100" src="@/assets/images/ecommerce/02.jpg" alt="" data-original-title="" title=""></div>
                          <div class="product-details col-md-7 text-start"><span><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning"></i></span>
                            <p class="mb-0">Fancy Shirt</p>
                            <div class="product-price">$100.00</div>
                          </div>
                        </div>
                        <div class="product-box row">
                          <div class="product-img col-md-5"><img class="img-fluid img-100" src="@/assets/images/ecommerce/03.jpg" alt="" data-original-title="" title=""></div>
                          <div class="product-details col-md-7 text-start"><span><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning"></i></span>
                            <p class="mb-0">Fancy Shirt</p>
                            <div class="product-price">$100.00  </div>
                          </div>
                        </div>
                      </div>
                      </swiper-slide>
                      </swiper>
                </div>
              </div>
        <!-- </carousel> -->
        <div class="product-filter text-center"><img class="img-fluid banner-product" src="@/assets/images/ecommerce/banner.jpg" alt="" data-original-title="" title=""></div>
    </div>
</div>
</template>

<script>
import { useProductStore } from '~~/store/product';
// import VueSlider from 'vue-slider-component';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper';

import {
    category
} from '../../../data/ecommerce/filter'

export default {
    name: 'filterPage',
    data() {
        return {
            min: 0,
            max: 0,
            start: 0,
            category: category,
            applyFilter: [],
            filter: false,
            isActive: false
         
           
        }
    },
    components: {
        Swiper,
        SwiperSlide
    },
    computed:{
  
    price(){
        return useProductStore().price
    },
    filterProduct(){
        return useProductStore().filterProducts
    }
},

    mounted()
    {
         var vm = this,
            max=  Math.max(...this.price),
            min=Math.min(...this.price)
        vm.start = max
        vm.min= min,
        vm.max=max
        useProductStore().priceFilter({min: this.min, max: this.start})
        },
    methods: {
    selectColor(event)
    {
        this.isActive= !this.isActive
        this.applyFilter.push(event.target.value) 
        useProductStore().setTags(this.applyFilter)
      },
    
        addfilter() {
            useProductStore().setTags(this.applyFilter)

        },
        setchange()
         {
        useProductStore().priceFilter({min: this.min, max: this.start})
    }

      },
     setup(){
      return {
      modules: [Navigation]
    }
     }
    }
</script>
