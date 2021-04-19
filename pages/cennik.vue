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
                        <li class="current">Cennik</li>
                    </ul>
                </div>
            </div>

            <div class="page-title">
                <div class="container">
                    <h1 class="title">Cennik</h1>
                </div>
            </div>
        </div>

        <MembershipLevelTable />

        <FooterStyleOne />

    </div>
</template>

<script>
    
    export default {
        components: {
            HeaderStyleTwo: () => import('@/components/HeaderStyleTwo'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            MembershipLevelTable: () => import('@/components/MembershipLevelTable'),
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
        },

        head() {
            return {
                title: 'Medycyna estetyczna cennik - dr Joanna Maciejewska',
                meta: [ {
                          hid: 'description',
                          name: 'description',
                          content: 'Kwas hialuronowy, Botoks, nici pdo, mezoterapia, endermologia, terapie autologiczne, zabiegi Jalupro. Medycyna estetyczna cennik.'
                        }]
            }
        },
    };
</script>


