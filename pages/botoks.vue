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
                        <li class="current">Toksyna botulinowa</li>
                    </ul>
                </div>
            </div>

            <div class="page-title">
                <div class="container">
                    <h1 class="title">Toksyna botulinowa</h1>
                </div>
            </div>
        </div>

        <ZabiegToksynaBotulinowa />

        

        <FooterStyleOne />
    </div>
</template>

<script>
    
    export default {
        components: {
            HeaderStyleTwo: () => import('@/components/HeaderStyleTwo'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            ZabiegPowiekszanieUst: () => import('@/components/zabiegi/ZabiegToksynaBotulinowa'),           
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
        },

         head() {
            return {
                title: 'Toksyna Botulinowa Botoks - Zabiegi',
                meta: [ {
                          hid: 'description',
                          name: 'description',
                          content: 'Toksyna botulinowa potocznie określana jako botoks jest lekiem stosowanym w medycynie od ponad 30 lat. Jest skutecznym zabiegiem ...'
                        }]
            }
        },
    };
</script>


