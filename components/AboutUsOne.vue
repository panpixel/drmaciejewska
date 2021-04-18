<template>
    <div class="about-section section-padding-top-190 section-padding-bottom" :class="addClassName">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 order-lg-1 order-2">
                    <div class="about-content mt-sm-50 mt-xs-50">
                        <span class="sub-title">Medycyna <strong>Estetyczna</strong></span>
                        <h2 class="title">CLINICA <span>Dąbrowa Górnicza</span></h2>
                        <p>Nasza klinika ma swoją siedzibę w funkcjonującej od kilkudziesięciu lat poradni stomatologicznej „Clinica”. Wkładamy wiele wysiłku, aby świadczyć usługi na jak najwyższym poziomie przy zachowaniu wszelkich zasad bezpieczeństwa oraz pełnej dyskrecji.</p>
                      
                    </div>
                </div>

                <div class="col-lg-6 order-lg-1 order-1">
                    <div class="about-image">
                        <div class="about-image-one">
                            <img src="/images/about/about01/czym-zajmuje-sie-medycyna-estetyczna-drmaciejewska.jpg" alt="czym zajmuje się medycyna estetyczna?">
                        </div>
                        <div class="about-image-two">
                            <img src="/images/about/about01/czym-zajmuje-sie-medycyna2-estetyczna-drmaciejewska.jpg" alt="czym zajmuje się medycyna estetyczna?">
                        </div>

                        <!-- Animation Shape Start -->
                        <ShapeWithAnimation addClassName="shape-1" dataDepth="4" />
                        <ShapeWithAnimation addClassName="shape-2" dataDepth="4" imgSrc="/images/shape-animation/about-shape-1.png" />
                        <ShapeWithAnimation addClassName="shape-3" dataDepth="4" imgSrc="/images/shape-animation/nwesletter-shape-2.png" />
                        <ShapeWithAnimation addClassName="shape-4" dataDepth="4" imgSrc="/images/shape-animation/shape-1.png" />
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