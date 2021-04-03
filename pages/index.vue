<template>
    <div class="main-container">

        <HeaderStyleTwo class="header-fluid" />

        <OffCanvasMobileMenu />

        <HeroBanner />

         <AboutUsOne />

        <TeacherQuote />

        <CounterupTwo />

        <AboutVideoOne />     

         <CourseStyleTwo />

        <BrandLogoCarousel />

        <FooterStyleOne addClassName="light-color" addBackgroundColor="bg-navy-blue" />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderStyleTwo: () => import('@/components/HeaderStyleTwo'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            HeroBanner: () => import('@/components/HeroBanner'),
             AboutUsOne: () => import('@/components/AboutUsOne'),           
            TeacherQuote: () => import('@/components/TeacherQuote'),
            CounterupTwo: () => import('@/components/CounterupTwo'),
            AboutVideoOne: () => import('@/components/AboutVideoOne'),           
             CourseStyleTwo: () => import('@/components/CourseStyleTwo'),
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'),
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
        },

        head() {
            return {
                title: 'Medycyna Estetyczna - dr Joanna Maciejewska'
            }
        },
    };
</script>


