<template>
    <div class="main-container">

        <HeaderStyleTwo class="header-fluid" />

        <OffCanvasMobileMenu />

        <HeroBanner />

         <AboutUsOne />

        <TeacherQuote />

        <CounterupTwo />         

         <CourseStyleTwo />

         <CallToActionThree />

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
             CourseStyleTwo: () => import('@/components/CourseStyleTwo'),
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'),
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
            CallToActionThree: () => import('@/components/CallToActionThree'),            
        },

        head() {
            return {
                title: 'Medycyna Estetyczna',
                meta: [ {
                          hid: 'description',
                          name: 'description',
                          content: 'Zabiegi medycyny estetycznej pozwalają zniwelować zmarszczki, usunąć blizny oraz pozbyć się innych defektów urody, które w sposób negatywny oddziałują na samopoczucie i samoocenę pacjenta. '
                        }]
            }
        },
    };
</script>

      