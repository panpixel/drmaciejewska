<template>
    <div class="cta-section section-padding" :class="addClassName">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="cta-content text-center">
                        <span class="sub-title">Nigdy nie jest za późno, <span>aby zacząć dbać o swoje piękno!</span></span>
                        <h2 class="title">Nie odkładaj jednak tego na jutro – zacznij od dziś!</h2>
                        <n-link to="/kontakt" class="btn btn-primary btn-hover-secondary btn-width-300">Zadzwoń do nas (32) 2642262</n-link>
                        <!-- Animation Shape Start -->
                        <ShapeWithAnimation addClassName="shape-1" dataDepth="4" />
                        <ShapeWithAnimation addClassName="shape-2" dataDepth="4" imgSrc="/images/shape-animation/cta-shape-01.png" />
                        <ShapeWithAnimation addClassName="shape-3" dataDepth="4" imgSrc="/images/shape-animation/nwesletter-shape-2.png" />
                        <!-- Animation Shape End -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['addClassName'],

        components: {
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
        },
    }
</script>