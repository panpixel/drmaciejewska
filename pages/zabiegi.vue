<template>
    <div class="main-container">

        <HeaderStyleTwo />

        <OffCanvasMobileMenu />

        <div class="page-title-section section-padding-top-0">
            <div class="page-breadcrumb">
                <div class="container">
                    <ul class="breadcrumb">
                        <li>
                            <n-link to="/">Home</n-link>
                        </li>
                        <li class="current">Zabiegi</li>
                    </ul>
                </div>
            </div>

            <div class="page-title">
                <div class="container">
                    <h1 class="title">Zabiegi</h1>
                </div>
            </div>
        </div>

        <div class="section-padding-bottom">
            <div class="container">


                <!-- Courses Wrapper Start -->
                <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 max-mb-n30">
                    <div class="col max-mb-30" data-aos="fade-up" v-for="course in courseData.coursePostItem" :key="course.id">
                        <div class="course-2">
                            <div class="thumbnail">
                                <n-link to="/" class="image">
                                    <img :src="course.image" :alt="course.title + 'Thumbnail'">
                                </n-link>
                            </div>
                            <div class="info">
                                <span class="price">{{ course.price }}</span>
                                 <h3 class="title">
                                    <n-link to="/">{{ course.title }}</n-link>
                                </h3>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Courses Wrapper End -->

            

            </div>
        </div>

        <FooterStyleOne />

    </div>
</template>

<script>
    import courseData from '~/data/courses'
    
    export default {
        components: {
            HeaderStyleTwo: () => import('@/components/HeaderStyleTwo'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
        },

        data () {
            return {
                courseData,
                options: [
                    'Popularity', 
                    'Latest',
                    'Price: low to high',
                    'Price: high to low'
                ],
                placeholderItem: 'Default'
            }
        },

        computed: {
            getSelectorPlaceholder: function () {
                return this.placeholderItem
            }
        },

        head() {
            return {
                title: 'Zabiegi Medycyna Estetyczna - dr Joanna Maciejewska',
                meta: [ {
                          hid: 'description',
                          name: 'description',
                          content: 'Zabiegi medycyny estetycznej pozwalają zniwelować zmarszczki, usunąć blizny oraz pozbyć się innych defektów urody, które w sposób negatywny oddziałują na samopoczucie i samoocenę pacjenta. '
                        }]
            }
        },
    };
</script>


