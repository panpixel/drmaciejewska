<template>
    <div class="main-container">

        <HeaderStyleTwo />

        <OffCanvasMobileMenu />

        <div class="page-title-section section-padding-top-0">
            <div class="page-breadcrumb position-static">
                <div class="container">
                    <ul class="breadcrumb">
                        <li>
                            <n-link to="/">Home</n-link>
                        </li>
                        <li class="current">Kontakt</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="contact-information-section section-padding-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="contact-title">
                            <span class="sub-title">Jesteśmy do Twojej dyspozycji.</span>
                            <h2 class="title">Skontaktuj się z nami!</h2>
                        </div>

                        <div class="contact-info-wrap max-mb-n50">
                            <!-- Single Contact Info Start -->
                            <div class="contact-info max-mb-50">
                                <div class="icon">
                                    <i class="fal fa-map-marker-alt"></i>
                                </div>
                                <div class="info">
                                    <h4 class="title"> Adres</h4>
                                    <span class="info-text"> Clinica stomatologiczna, <br />
                                    ul. Tysiąclecia 7, <br />41-303 Dąbrowa Górnicza
                                    
                                    </span>
                                </div>
                            </div>
                            <!-- Single Contact Info End -->

                            <!-- Single Contact Info Start -->
                            <div class="contact-info max-mb-50">
                                <div class="icon">
                                    <i class="fal fa-phone"></i>
                                </div>
                                <div class="info">
                                    <h4 class="title">Kontakt</h4>
                                    <span class="info-text"> 
                                        Umów wizytę: <strong>(32) 264 22 62</strong>
                                        <br> 
                                        Tel. dla pacjentów: <strong>799 866 161</strong>
                                        <br>
                                        Mail: <a href="mailto:kontakt@drmaciejewska.pl">kontakt@drmaciejewska.pl</a>
                                    </span>
                                </div>
                            </div>
                            <!-- Single Contact Info End -->

                            <!-- Single Contact Info Start -->
                            <div class="contact-info max-mb-50">
                                <div class="icon">
                                    <i class="fal fa-clock"></i>
                                </div>
                                <div class="info">
                                    <h4 class="title">Godziny otwarcia</h4>
                                    <span class="info-text">Pon. – Pt : 09:00 – 20:00 <br> Niedziela i Sobota: zamknięte</span>
                                </div>
                            </div>
                            <!-- Single Contact Info End -->
                        </div>

                    </div>
                    <div class="col-lg-8">
                        <div class="contact-image mt-sm-50 mt-xs-50">
                            <img src="/images/others/kontakt-drmaciejewska.jpg" alt="kontakt dr joanna maciejewska">

                            <!-- Animation Shape Start -->
                            <ShapeWithAnimation addClassName="shape-1" dataDepth="3" imgSrc="/images/shape-animation/about-shape-1.png" />
                            <ShapeWithAnimation addClassName="shape-3" dataDepth="4" />
                            <ShapeWithAnimation addClassName="shape-4" dataDepth="4" imgSrc="/images/shape-animation/shape-1.png" />
                            <ShapeWithAnimation addClassName="shape-5" dataDepth="4" imgSrc="/images/shape-animation/nwesletter-shape-2.png" />
                            <!-- Animation Shape End -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

     
        <FooterStyleOne />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderStyleTwo: () => import('@/components/HeaderStyleTwo'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
            ContactForm: () => import('@/components/ContactForm'),
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
        },

        head() {
            return {
                title: 'Kontakt do Medycyna Estetyczna',
                meta: [ {
                          hid: 'description',
                          name: 'description',
                          content: 'Nigdy nie jest za późno, aby zacząć dbać o swoje piękno! Nie odkładaj jednak tego na jutro – zacznij od dziś!'
                        }]
            }
        },
    };
</script>


