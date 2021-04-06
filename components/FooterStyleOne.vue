<template>
    <div class="footer-section" :class="addBackgroundColor">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-md-5 max-mb-50">
                    <div class="footer-widget" :class="addClassName">
                        <h4 class="footer-widget-title">Adres</h4>
                        <div class="footer-widget-content">
                            <div class="content">
                                <p>Tysiąclecia 7, 41-303 Dąbrowa Górnicza</p>
                                <p>tel. dla pacjentów: 799 866 161</p>
                                <p>tel. do umawiania wizyt: (32) 264 22 62)</p>
                                <p>
                                    <a href="mailto:kontakt@drmaciejewska.pl">kontakt@drmaciejewska.pl</a>
                                </p>
                            </div>
                            <div class="footer-social-inline">
                                <a href="https://www.facebook.com/" target="_blank">
                                    <i class="fab fa-facebook-square"></i>
                                </a>
                               
                                <a href="https://www.instagram.com/" target="_blank">
                                    <i class="fab fa-instagram"></i>
                                </a>
                               
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-xl-3 col-md-4 col-sm-7 max-mb-50">
                    <div class="footer-widget" :class="addClassName">
                        <h4 class="footer-widget-title">Medycyna estetyczna</h4>
                        <div class="footer-widget-content">
                            <ul class="column-2">
                                <li>
                                    <n-link to="">link 1</n-link>
                                </li>
                                <li>
                                    <n-link to="">link 2</n-link>
                                </li>
                                <li>
                                    <n-link to="">link 3</n-link>
                                </li>
                               
                                <li>
                                    <n-link to="/o-mnie">Joanna Maciejewska</n-link>
                                </li>
                                <li>
                                    <n-link to="/kontakt">Kontakt</n-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-3 col-sm-5 col-12 max-mb-50">
                    <div class="footer-widget" :class="addClassName">
                        <h4 class="footer-widget-title">Informacje</h4>
                        <div class="footer-widget-content">
                            <ul>
                             
                                <li>
                                    <n-link to="">Polityka prywatności</n-link>
                                </li>
                                <li>
                                    <n-link to="">Regulamin</n-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer Copyright Start -->
            <div class="row max-mt-20">
                <div class="col">
                    <p class="copyright">&copy; {{ new Date().getFullYear() }} <b>drmaciejewska.pl</b> zaprojektowane z <i class="fa fa-heart text-danger"></i> <a href="https://panpixel.studio/" target="_blank"><b>Panpixel.Studio</b></a></p>
                </div>
            </div>
            <!-- Footer Copyright End -->
        </div>

        <client-only>
            <back-to-top class="scroll-top" bottom="30px">
                <i class="arrow-top fal fa-long-arrow-up"></i>
                <i class="arrow-bottom fal fa-long-arrow-up"></i>
            </back-to-top>
        </client-only>
    </div>
</template>

<script>
    export default {
        props: [
            'addClassName', 
            'addBackgroundColor' 
        ],
    }
</script>