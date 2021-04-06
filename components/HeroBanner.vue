<template>
    <div class="intro1-section section-fluid" :style="{backgroundImage: `url('/images/intro/intro1/bg-1.jpg')`}">
        <div class="container">
            <div class="row row-cols-md-2 row-cols-1 max-mb-n30">
                <!-- Intro One Content Start -->
                <div class="col align-self-center max-mb-30">
                    <div class="intro1-content text-center text-md-left">
                        <span class="sub-title">Poprawa wyglądu skóry</span>
                        <h2 class="title">Medycyna estetyczna.<br>Piękno w klasie premium.</h2>
                        <div class="desc">
                            <p>Zabiegi medycyny estetycznej pozwalają zniwelować zmarszczki, usunąć blizny oraz pozbyć się innych defektów urody, które w sposób negatywny oddziałują na samopoczucie i samoocenę pacjenta. </p>
                        </div>
                       
                    </div>
                </div>
                <!-- Intro One Content End -->

                <!-- Intro One Course Start -->
                <div class="col max-mb-30">
                    <div class="intro1-course">
                        <img class="popular-course-icon" src="/images/intro/intro1/intro-popular-course.png" alt="image">
                        <!-- Course Start -->
                        <div class="course-2">
                            <div class="thumbnail">
                                <n-link to="/" class="image">
                                    <img src="/images/zabiegi/powiekszanie-ust-bg-drmaciejewska.jpg" alt="Powiększanie ust">
                                </n-link>
                            </div>
                            <div class="info">
                                <span class="price">500 zł</span>
                               <h3 class="title">
                                    <n-link to="/powiekszanie-ust">Powiększanie ust</n-link>
                                </h3>
                                <div class="desc">
                                    <p>Pełne i wydatne usta o regularnym konturze to marzenie wielu kobiet. Obecnie jedną z najpopularniejszych metod ...</p>
                                </div>
                            </div>
                        </div>
                        <!-- Course End -->

                        <ShapeWithAnimation addClassName="intro1-scene" dataDepth="3" imgSrc="/images/shape-animation/shape-1.png" />
                    </div>
                </div>
                <!-- Intro One Course End -->

            </div>
        </div>

        <!-- Section Bottom Shape Start -->
        <div class="section-bottom-shape">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" height="100">
                <path d="M 0 0 L100 0 Q 50 200 0 0"></path>
            </svg>
        </div>
        <!-- Section Bottom Shape End -->
    </div>
</template>

<script>
    export default {
        components: {
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
        },
    }
</script>