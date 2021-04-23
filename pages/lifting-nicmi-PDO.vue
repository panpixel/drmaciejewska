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
                        <li class="current">Lifting nićmi PDO</li>
                    </ul>
                </div>
            </div>

            <div class="page-title">
                <div class="container">
                    <h1 class="title">Lifting nićmi PDO</h1>
                </div>
            </div>
        </div>

        <ZabiegLiftingNicmiPdo />

        

        <FooterStyleOne />
    </div>
</template>

<script>
    
    export default {
        components: {
            HeaderStyleTwo: () => import('@/components/HeaderStyleTwo'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            ZabiegPowiekszanieUst: () => import('@/components/zabiegi/ZabiegLiftingNicmiPdo'),           
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
        },

         head() {
            return {
                title: 'Lifting nićmi PDO - Zabiegi',
                meta: [ {
                          hid: 'description',
                          name: 'description',
                          content: 'Lifting nićmi PDO jest alternatywą dla zabiegów chirurgicznego liftingu. Daje szybki efekt wygładzenia i napięcia skóry'
                        }]
            }
        },
    };
</script>


