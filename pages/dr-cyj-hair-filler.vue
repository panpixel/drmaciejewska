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
                        <li class="current">DR. CYJ HAIR FILLER</li>
                    </ul>
                </div>
            </div>

            <div class="page-title">
                <div class="container">
                    <h1 class="title">DR. CYJ HAIR FILLER</h1>
                </div>
            </div>
        </div>

        <ZabiegDrCyjHairFiller />

        

        <FooterStyleOne />
    </div>
</template>

<script>
    
    export default {
        components: {
            HeaderStyleTwo: () => import('@/components/HeaderStyleTwo'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            ZabiegPowiekszanieUst: () => import('@/components/zabiegi/ZabiegDrCyjHairFiller'),           
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
        },

         head() {
            return {
                title: 'DR. CYJ HAIR FILLER - Zabiegi',
                meta: [ {
                          hid: 'description',
                          name: 'description',
                          content: 'DR. CYJ HAIR FILLER to innowacyjny produkt, niezwykle skuteczny w walce z wypadającymi włosami. Wyjątkowa formuła preparatu polega na jego bogatym składzie ...'
                        }]
            }
        },
    };
</script>


