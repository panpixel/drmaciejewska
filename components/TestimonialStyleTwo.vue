<template>
    <div class="testimonial-section section-padding bg-f8f8f8">
        <div class="container-fluid pl-80 pl-lg-15 pl-md-15 pl-sm-15 pl-xs-15 pr-80 pr-lg-15 pr-md-15 pr-sm-15 pr-xs-15">
            
            <SectionHeader subTitle="co mówią o nas nasi klienci?" title="Opinie o DrMaciejewska.pl?" alignment="text-center section-title-two" />

            <!--Testimonial Slider Start -->
            <div class="testimonial-slider-two" data-aos="fade-up">
                <swiper :options="swiperOption">
                    <div class="swiper-slide" v-for="testimonial in testimonials" :key="testimonial.index">
                        <div class="testimonial-two testimonial-three max-mb-30">
                            <div class="content">
                                <h4 class="title">{{ testimonial.title }}</h4>
                                <p>{{ testimonial.desc }}</p>
                            </div>
                            <div class="author-info">
                                <div class="image">
                                    <img :src="testimonial.imgSrc" :alt="testimonial.name">
                                </div>
                                <div class="cite">
                                    <h6 class="name">{{ testimonial.name }}</h6>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper>
                <!-- swiper pagination -->
                <div class="swiper-pagination text-center"></div>
            </div>
            <!--Testimonial Slider End -->
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                swiperOption: {
                    spaceBetween: 50,
                    loop: true,
                    speed: 1000,
                    centeredSlides: true,
                    autoHeight: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    // Responsive breakpoints
                    breakpoints: {
                        1200:{
                            slidesPerView : 3
                        },
                        992:{
                            slidesPerView : 2
                        },
                        300:{
                            slidesPerView : 1
                        }
                    }
                },

                testimonials: [
                    {
                        title: "Ocena na najwyższym poziomie",
                        desc: "Ocena na najwyższym poziomie, fachowa porada, profesjonalne podejście do pacjenta. Polecam.",
                        name: "Kasia",
                        position: "Kasia",
                        imgSrc: "/images/testimonial/70/testimonial-1.jpg"
                    },
                    {
                        title: "Wspaniały kontakt,fantastycznie przeprowadzony zabieg",
                        desc: "Pełny profesjonalizm. Wspaniały kontakt,fantastycznie przeprowadzony zabieg i co bardzo ważne,zainteresowanie pacjentem również w dniu następnym po zabiegu. Praktycznie nie spotykane. Pozdrawiam cały zespół.",
                        name: "Ania",
                        position: "IT Specialist",
                        imgSrc: "/images/testimonial/70/testimonial-2.jpg"
                    },
                    {
                        title: "Kontakt jest szybki i konkretny",
                        desc: " Nie mam co prawda żadnego porównania z innymi tego typu gabinetami, ale jakoś nie czuję potrzeby, by takie porównanie robić, a klinikę zmieniać. Klasa.",
                        name: "Beata",
                        position: "Private Tutor",
                        imgSrc: "/images/testimonial/70/testimonial-3.jpg"
                    }
                ]
            }
        }
    };
</script>