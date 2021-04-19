<template>
    <div class="about-section section-padding-bottom" style="padding-top:80px;">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 ">
                    <div class="about-content mt-sm-50 mt-xs-50">
                        <span class="sub-title">DR <strong>Joanna Maciejewska</strong></span>
                        <h2 class="title">CLINICA <span>Dąbrowa Górnicza</span></h2>
                        <p>
                        Jestem lekarzem dentystą oraz lekarzem medycyny estetycznej, członkiem Polskiego Towarzystwa Medycyny Estetycznej i Anti-Aging, absolwentką Uniwersytetu Medycznego w Białymstoku. </p> 
                         <p>Od kilkunastu lat pomagam moim pacjentom z różnymi problemami stomatologicznymi, a teraz również z problemami natury estetycznej.  </p> 
                                               
                    </div>
                </div>

                <div class="col-lg-6 ">
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


                 <div class="col-lg-12" style="padding-top:100px;">
                       <p>
                       Staram się ciągle poszerzać swoją wiedzę na kursach i szkoleniach. 
                        W pracy ogromne znaczenie ma dla mnie <strong>bezpieczeństwo i zdrowie pacjentów</strong>. Starannie wybieram oferowane zabiegi i preparaty tak, aby zapewnić Państwu realne efekty.
                       Wśród szeregu oferowanych w naszym gabinecie zabiegów najbardziej pasjonują mnie <strong>zabiegi autologiczne</strong>, wykorzystujące spektakularne możliwości regeneracyjne naszego organizmu. 
                        Do każdego pacjenta podchodzę bardzo indywidualnie starając się dobrze poznać jego problemy oraz znaleźć najlepsze ich rozwiązanie.
                        
                        </p>               
              
               
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