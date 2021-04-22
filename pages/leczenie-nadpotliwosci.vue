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
                        <li class="current">Leczenie nadpotliwości</li>
                    </ul>
                </div>
            </div>

            <div class="page-title">
                <div class="container">
                    <h1 class="title">Leczenie nadpotliwości</h1>
                </div>
            </div>
        </div>

        <ZabiegLeczenieNadpotliwosci />

        

        <FooterStyleOne />
    </div>
</template>

<script>
    
    export default {
        components: {
            HeaderStyleTwo: () => import('@/components/HeaderStyleTwo'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            ZabiegPowiekszanieUst: () => import('@/components/zabiegi/ZabiegLeczenieNadpotliwosci'),           
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
        },

         head() {
            return {
                title: 'Leczenie nadpotliwości - Zabiegi',
                meta: [ {
                          hid: 'description',
                          name: 'description',
                          content: 'Właściwą funkcją organizmu jest wydzielanie potu ale jego nadmiar jest bardzo kłopotliwy...'
                        }]
            }
        },
    };
</script>


