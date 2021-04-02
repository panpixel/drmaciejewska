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
                        <li class="current">Powiększanie ust</li>
                    </ul>
                </div>
            </div>

            <div class="page-title">
                <div class="container">
                    <h1 class="title">Powiększanie ust</h1>
                </div>
            </div>
        </div>

        <CourseDetailsTab />

        <RelatedCourse />

        <FooterStyleOne />
    </div>
</template>

<script>
    
    export default {
        components: {
            HeaderStyleTwo: () => import('@/components/HeaderStyleTwo'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            CourseDetailsTab: () => import('@/components/CourseDetailsTab'),
            RelatedCourse: () => import('@/components/RelatedCourse'),
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
        },

        head() {
            return {
                title: 'Powiększanie ust'
            }
        },
    };
</script>


