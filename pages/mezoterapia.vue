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
                        <li class="current">Mezoterapia NCTF 135HA</li>
                    </ul>
                </div>
            </div>

            <div class="page-title">
                <div class="container">
                    <h1 class="title">Mezoterapia NCTF 135HA </h1>
                </div>
            </div>
        </div>

        <ZabiegMezoterapia />

        

        <FooterStyleOne />
    </div>
</template>

<script>
    
    export default {
        components: {
            HeaderStyleTwo: () => import('@/components/HeaderStyleTwo'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            ZabiegPowiekszanieUst: () => import('@/components/zabiegi/ZabiegMezoterapia'),           
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
        },

         head() {
            return {
                title: 'Mezoterapia NCTF 135HA - Zabiegi',
                meta: [ {
                          hid: 'description',
                          name: 'description',
                          content: 'Mezoterapia jest metodą stosowaną od wielu lat na całym świecie w celu miejscowej rewitalizacji skóry. Zabieg polega na ...'
                        }]
            }
        },
    };
</script>


