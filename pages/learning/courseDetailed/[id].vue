<template>
    <Breadcrumbs main="Learning" title="Detailed Course"/>
    <div class="container-fluid">
    <div class="row">
        <div class="col-xl-9 xl-60 order-xl-0 order-1 box-col-12">
            <div class="blog-single">
                <div class="blog-box blog-details">
                    <div class="card"><img class="img-fluid w-100" src="@/assets/images/faq/learning-1.png" alt="blog-main"></div>
                    <!-- <div class="card"> -->
                        <!-- <div class="card-body"> -->
                            <div class="blog-details">
                                <ul class="blog-social">
                                    <li>25 July 2018</li>
                        <li><i class="icofont icofont-user"></i>Mark <span>Jecno </span></li>
                        <li><i class="icofont icofont-thumbs-up"></i>02<span>Hits</span></li>
                        <li><i class="icofont icofont-ui-chat"></i>598 Comments</li>
                                </ul>
                                <h4> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the
                                    Internet.</h4>
                                <div class="single-blog-content-top">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like</p>
                                </div>
                            </div>
                        <!-- </div> -->
                    <!-- </div> -->
                </div>
                <section class="comment-box">
                        <h4>Comment </h4>
                        <hr>
                        <ul>
                            <li>
                                <div class="media align-self-center"><img class="align-self-center" src="/images/blog/comment.jpg" alt="Generic placeholder image">
                                    <div class="media-body">
                                        <div class="row">
                                            <div class="col-md-4 xl-100">   
                                                    <h6 class="mt-0">Jolio Mark<span> ( Designer )</span></h6>
                                                 </div>
                                            <div class="col-md-8 xl-100">
                                                <ul class="comment-social float-start float-md-end learning-comment">
                                                    <li class="digits"><i class="icofont icofont-thumbs-up"></i>02 Hits</li>
                                                    <li class="digits"><i class="icofont icofont-ui-chat"></i>598 Comments</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <ul>
                                    <li>
                                        <div class="media"><img class="align-self-center" src="/images/blog/9.jpg" alt="Generic placeholder image">
                                            <div class="media-body">
                                                <div class="row">
                                                    <div class="col-xl-12">
                                                            <h6 class="mt-0">Jolio Mark<span> ( Designer )</span></h6>
                                                    </div>
                                                </div>
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div class="media"><img class="align-self-center" src="/images/blog/4.jpg" alt="Generic placeholder image">
                                    <div class="media-body">
                                        <div class="row">
                                            <div class="col-md-4 xl-100">
                                                    <h6 class="mt-0">Jolio Mark<span> ( Designer )</span></h6>
                                            </div>
                                            <div class="col-md-8 xl-100">
                                                <ul class="comment-social learning-comment">
                                                    <li class="digits"><i class="icofont icofont-thumbs-up"></i>02 Hits</li>
                                                    <li class="digits"><i class="icofont icofont-ui-chat"></i>598 Comments</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        </section>
                    <!-- </div> -->
                <!-- </div> -->
            </div>

        </div>
        <!-- <div class="col-xl-3 xl-40 box-col-12 learning-filter">
            <div class="md-sidebar"><a class="btn btn-primary email-aside-toggle md-sidebar-toggle">Learning filter</a>
              <div class="md-sidebar-aside job-sidebar">
                <div class="default-according style-1 faq-accordion job-accordion" id="accordionoc">
                  <div class="row"> -->
                        <learningtab />
                    <!-- </div>
                </div>
                </div>
            </div>
        </div> -->
    </div>
</div>
</template>

<script>
// import learningtab from "../list/learninglist/learningTab.vue"
import learningtab from "../list/learningTab.vue"
import {
    mapState
} from 'pinia';
import { useCourseStore } from '~~/store/courses';
// import router from '@/router';
export default {
    components: {
        learningtab
    },
    computed: {
        // ...mapState({
        //     singlecourse: state => state.courses.courses.find(course => {
        //         if (parseInt(router.currentRoute._rawValue.params.id) === course.id)
        //             return course;
        //     }),
        // }),
        singlecourse(){
            useCourseStore().courses.find(course => {
                if (parseInt(router.currentRoute._rawValue.params.id) === course.id)
                    return course;
            })
        }
    },
    methods: {
        getImgUrl(filename) {
            // var images = require.context('/images/faq/', false, /\.jpg$/);
            // return images('./' + filename);
        },

    }
}
</script>
