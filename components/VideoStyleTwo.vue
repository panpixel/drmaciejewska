<template>
    <div id="video-section-1" class="section-padding-top position-relative bg-pattern bg-f8f8f8" :style="{ backgroundImage: `url('/images/bg/background-pattern-grid-line.png')` }">

        <div class="container">
            <div class="about-me-video-wrapper">
                <client-only>
                    <silent-box :image="videos[0]" class="about-me-video video-popup">
                        <template v-slot:silentbox-item>
                            <img class="image" src="/images/about/about-me/video-about-us-2.jpg" alt="image">
                            <img class="icon" src="/images/icons/icon-youtube-play.png" alt="icon">
                        </template>
                    </silent-box>
                </client-only>
                <!-- Animation Shape Start -->
                <ShapeWithAnimation addClassName="shape-1" dataDepth="3" imgSrc="/images/shape-animation/shape-2.svg" />
                <ShapeWithAnimation addClassName="shape-2" dataDepth="-3" imgSrc="/images/shape-animation/shape-3.png" />
                <ShapeWithAnimation addClassName="shape-3" dataDepth="4" />
                <ShapeWithAnimation addClassName="shape-4" dataDepth="4" imgSrc="/images/shape-animation/shape-1.png" />
                <!-- Animation Shape End -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                videos: [
                    {
                        src: 'https://www.youtube.com/watch?v=9No-FiEInLA',
                        thumbnail: ""
                    }
                ],
            }
        },

        components: {
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
        },
    };
</script>