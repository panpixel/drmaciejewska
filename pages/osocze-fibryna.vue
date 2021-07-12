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
                        <li class="current">Osocze i Fibryna</li>
                    </ul>
                </div>
            </div>

            <div class="page-title">
                <div class="container">
                    <h1 class="title">Osocze i Fibryna</h1>
                </div>
            </div>
        </div>

        <ZabiegOsoczeBogatoplytkowe />

        

        <FooterStyleOne />
    </div>
</template>

<script>
    
    export default {
        components: {
            HeaderStyleTwo: () => import('@/components/HeaderStyleTwo'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            ZabiegPowiekszanieUst: () => import('@/components/zabiegi/ZabiegOsoczeBogatoplytkowe'),           
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
        },

         head() {
            return {
                title: 'Osocze Bogatopłytkowe - Zabiegi',
                meta: [ {
                          hid: 'description',
                          name: 'description',
                          content: 'Z wiekiem skóra traci blask i elastyczność, pojawiają się zmarszczki, bruzdy, przebarwienia. Wynika to ze spowolnienia ...'
                        }]
            }
        },
    };
</script>


