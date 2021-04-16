<template>
    <div class="course-section section-fluid section-padding conttent">
        <div class="container">
            <!-- Section Title Start -->
            <div class="section-title-two text-center" data-aos="fade-up">
                <span class="sub-title">Zatrzymać proces starzenia, wyglądać pięknie, młodo i atrakcyjnie</span>
                <h2 class="title fz-48">Polecane zabiegi medycyny estetycznej</h2>
            </div>
            <!-- Section Title End -->

            <div class="row row-cols-xl-4 row-cols-lg-2 row-cols-md-2 row-cols-1 max-mb-n30">
                <div class="col max-mb-30" v-for="course in courses" :key="course.index" data-aos="fade-up">
                    <div class="course-6">
                        <div class="thumbnail">
                            <n-link to="/" class="image">
                                <img :src="course.imgSrc" :alt="course.alt">
                                <div class="course-overlay-bg"></div>
                            </n-link>
                        </div>
                        <div class="info">
                            <div class="course-caption-main">
                                cena zabiegu: <span class="price">{{ course.price }}</span>
                                <h3 class="title">
                                    <n-link to="/">
                                        {{ course.title }}
                                    </n-link>
                                </h3>
                            </div>
                            <div class="course-caption-collapse">
                                
                                <div class="desc">
                                    <p>{{ course.desc }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row max-mt-70">
                <div class="text-center col-xl-4 col-lg-7 mx-auto">
                    <n-link to="/zabiegi" class="link link-lg">
                        W naszej klinice mieszczącej się w <strong>Dąbrowie Górniczej</strong> wykonujemy zabiegi medycyny estetycznej.<br/>
                        <mark>Zobacz wszystkie nasze zabiegi 
                            <i class="far fa-long-arrow-right"></i>
                        </mark>
                    </n-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                courses: [
                    {
                        imgSrc: "/images/zabiegi/bruksizm-medycyna-estetyczna-drmaciejewska.jpg",
                        alt: "Bruksizm",
                        price: "od 790 zł",
                        title: "Bruksizm",
                        lessons: "20 Lessons",
                        students: "51 Students",
                        desc: "Bruksizm to podświadome (mimowolne) zgrzytanie i zaciskanie zębów ..."
                    },
                    {
                        imgSrc: "/images/zabiegi/kwas-hialuronowy-estetyczna-drmaciejewska.jpg",
                        alt: "Kwas hialuronowy",
                        price: "od 750 zł",
                        title: "Kwas hialuronowy",
                        lessons: "40 Lessons",
                        students: "80 Students",
                        desc: "Kwas hialuronowy jest naturalną substancją występującą w naszej skórze …"
                    },
                    {
                        imgSrc: "/images/zabiegi/leczenie-nadpotliwosci-estetyczna-drmacejewska.jpg",
                        alt: "Leczenie Nadpotliwości",
                        price: "od 1500 zł",
                        title: "Nadpotliwość",
                        lessons: "16 Lessons",
                        students: "57 Students",
                        desc: "Właściwą funkcją organizmu jest wydzielanie potu ale jego nadmiar jest bardzo kłopotliwy …"
                    },
                    {
                        imgSrc: "/images/courses/385/course-4.jpg",
                        alt: "Mezoterapia NCTF 135HA",
                        price: "600 zł",
                        title: "Mezoterapia NCTF 135HA",
                        lessons: "20 Lessons",
                        students: "51 Students",
                        desc: "Mezoterapia jest metodą stosowaną od wielu lat na całym świecie w celu miejscowej rewitalizacji skóry …"
                    }
                ]
            }
        }
    };
</script>