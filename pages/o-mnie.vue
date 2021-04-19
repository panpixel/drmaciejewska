<template>
    <div class="main-container">

        <HeaderStyleTwo />

        <OffCanvasMobileMenu />

        <PageBannerOne bgImg="backgroundImage: url('/images/page-banner/dabrowagornicza-drmaciejewska.jpg')" title="DOBRY WYGLĄD JEST NASZYM CELEM" />

        <AboutUsOne />

        <AboutVideoOne />

        <CallToActionOne addClassName="bg-f8f8f8 pt-50" />

        <TestimonialStyleTwo />

        


        <FooterStyleOne addClassName="light-color" addBackgroundColor="bg-navy-blue" />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderStyleTwo: () => import('@/components/HeaderStyleTwo'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            PageBannerOne: () => import('@/components/PageBannerOne'),
            AboutUsOne: () => import('@/components/AboutUsOne'),
            AboutVideoOne: () => import('@/components/AboutVideoOne'),
            TestimonialStyleTwo: () => import('@/components/TestimonialStyleTwo'),
          
            CallToActionOne: () => import('@/components/CallToActionOne'),
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
        },

         head() {
            return {
                title: 'Dr Joanna Maciejewska - zapewnie realne efekty',
                meta: [ {
                          hid: 'description',
                          name: 'description',
                          content: 'Jestem lekarzem dentystą oraz lekarzem medycyny estetycznej. Od kilkunastu lat pomagam moim pacjentom z różnymi problemami stomatologicznymi, a teraz również z problemami natury estetycznej.'
                        }]
            }
        },
    };
</script>


