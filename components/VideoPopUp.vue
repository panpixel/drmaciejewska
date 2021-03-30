<template>
    <client-only>
        <silent-box :image="videos[0]" class="about-me-video video-popup">
            <template v-slot:silentbox-item>
                <img class="image" src="/images/about/about-me/about-me-popup-video-poster.jpg" alt="image">
                <img class="icon" src="/images/icons/icon-youtube-play.png" alt="icon">
            </template>
        </silent-box>
    </client-only>
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
        }
    };
</script>