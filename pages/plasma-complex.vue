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
                        <li class="current">Plasma Complex</li>
                    </ul>
                </div>
            </div>

            <div class="page-title">
                <div class="container">
                    <h1 class="title">Plasma Complex</h1>
                </div>
            </div>
        </div>

        <ZabiegPlasmaComplex />

        

        <FooterStyleOne />
    </div>
</template>

<script>
    
    export default {
        components: {
            HeaderStyleTwo: () => import('@/components/HeaderStyleTwo'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            ZabiegPowiekszanieUst: () => import('@/components/zabiegi/ZabiegPlasmaComplex'),           
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
        },

         head() {
            return {
                title: 'Plasma Complex - Zabiegi',
                meta: [ {
                          hid: 'description',
                          name: 'description',
                          content: 'Plasma Complex to autologiczny zabieg, w którym wykorzystywana jest synergia działania własnych komórek macierzystych oraz fibryny strukturalnej.'
                        }]
            }
        },
    };
</script>


