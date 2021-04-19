<template>
    <div class="about-video-section  section-padding-bottom-160" style="padding-top:80px;" >
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-8">
                    <div class="about-me-video-wrapper about-us-one-video pr-55 pr-sm-0 pr-xs-0">
                        <!-- About Me Video Start -->
                        <client-only>
                            <silent-box :image="videos[0]" class="about-me-video video-popup">
                                <template v-slot:silentbox-item>
                                    <img class="image" src="/images/video/about-video.jpg" alt="image">
                                    <img class="icon" src="/images/icons/icon-youtube-play.png" alt="icon">
                                </template>
                            </silent-box>
                        </client-only>
                        <!-- About Me Video End -->

                        <!-- Animation Shape Start -->
                        <ShapeWithAnimation addClassName="shape-1" dataDepth="3" imgSrc="/images/shape-animation/shape-2.svg" />
                        <ShapeWithAnimation addClassName="shape-2" dataDepth="-3" imgSrc="/images/shape-animation/shape-3.png" />
                        <ShapeWithAnimation addClassName="shape-3" dataDepth="4" />
                        <ShapeWithAnimation addClassName="shape-4" dataDepth="4" imgSrc="/images/shape-animation/shape-1.png" />
                        <!-- Animation Shape End -->
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="about-content mt-sm-50 mt-xs-50">
                        <span class="sub-title">DR JOANNA MACIEJEWSKA </span>
                        <h2 class="title">MEDYCYNA ESTETYCZNA <span>Dąbrowa Górnicza</span> </h2>
                        <p>MEDYCYNA ESTETYCZNA DR JOANNA MACIEJEWSKA ma swoją siedzibę w funkcjonującej od kilkudziesięciu lat poradni stomatologicznej „Clinica”. </p>
                        
                    </div>
                </div>
                <div class="col-lg-12" style="padding-top:100px;">
                <p>Wkładamy wiele wysiłku, aby świadczyć usługi na jak najwyższym poziomie przy zachowaniu wszelkich zasad bezpieczeństwa oraz pełnej dyskrecji. Stawiamy przede wszystkim na <strong>jakość i bezpieczeństwo</strong>, 
                dlatego stosujemy wyłącznie <strong>oryginalne preparaty</strong> prosto od krajowych dystrybutorów, aby mieć pewność przebadanego składu oraz kontrolowanego procesu produkcyjnego.</p>
               <p>Podczas terapii autologicznych używamy jedynie certyfikowanych probówek <strong>In vivo polskiej firmy KayMed</strong> co przekłada się na znakomite efekty terapii przeprowadzanych w naszym gabinecie.</p>
               
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