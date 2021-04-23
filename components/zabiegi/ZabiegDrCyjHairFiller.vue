<template>
    <div class="section">
        <div class="container">
            <div class="row max-mb-n50">

                <div class="col-lg-8 col-12 order-lg-1 max-mb-50">
                    <!-- Course Details Wrapper Start -->
                    <div class="course-details-wrapper">
                        <b-tabs pills card>
                            <b-tab title="Opis zabiegu" active>
                                <div class="course-overview">
                                    <h3 class="title">CO TO JEST DR. CYJ HAIR FILLER?</h3>
                                    <p>DR. CYJ HAIR FILLER to innowacyjny produkt, niezwykle skuteczny w walce z wypadającymi włosami. Wyjątkowa formuła preparatu polega na jego bogatym składzie, w którym znajduje się 7 peptydów oraz 
                                    kwas hialuronowy. To co wyróżnia DR. CYJ to opatentowana przez Caregen technologia przedłużonego uwalniania substancji aktywnych – „Sustained Release Technology” – która działa aż 14 dni po aplikacji!</p>                          
                                  
                                     <h3 class="title">JAK DZIAŁA DR. CYJ HAIR FILLER?</h3>
                                     <p>Zawartość kwasu hialuronowego 0,7% oraz licznych peptydów takich jak np. Dekapeptyd-10; Oktapeptyd-11; Oktapeptyd-2 czy Dekapeptyd-18; Dekapeptyd-28 powoduje bezpośrednio pobudzenie angiogenezy 
                                     w obrębie mieszków włosowych, zahamowanie apaptozy oraz stymulację wzrostu nowych włosów. Oligopeptyd-54 blokuje wpływ DHT, który wywołuje proces łysienia. 
                                     Ta bomba witaminowa aktywuje wzrost włosów oraz pobudza komórki macierzyste, stymuluje mikrokrążenie skóry głowy i odżywia osłabione cebulki włosa.</p>

                                   <h3 class="title">DLA KOGO JEST PRZEZNACZONY ZABIEG DR. CYJ FILLER?</h3>

                                   <p>Peptydowa terapia włosów przeznaczona jest równo dla kobiet, jak i mężczyzn. Stosowany nie tylko w przypadku łysienia androgenowego, ale także spowodowanego stresem, złą dietą, osłabieniem, 
                                   częstym farbowaniem lub też niewłaściwą pielęgnacją włosów i skóry głowy. Zabieg także świetnie wzmacnia włosy przed i po przeszczepie.</p>
                                                                  
                                 <h3 class="title">KORZYŚCI Z ZABIEGU DR. CYJ FILLER</h3>
                                 
                                  <ul class="maxcoach-list">
                                  <li class="item" v-for="list in lists" :key="list.id">
                                  <div class="icon">
                                  <i class="fas fa-check"></i>
                                  </div>
                                 <div class="text">{{ list }}</div>
                                 </li>
                                 </ul>

                                 <h3 class="title">PRZYGOTOWANIE I PROCEDURA ZABIEGOWA</h3>


                                <p>Terapia nie wymaga specjalnego przygotowania, jedynie dzień przed zabiegiem i po zabiegu nie wskazane jest picie alkoholu. 
                                Zabieg z wykorzystaniem preparatu Dr. Cyj Hair Hiller polega na wykonaniu serii wkłuć w skórę głowy w powierzchniowe warstwy skóry właściwej. 
                                Cała sesja trwa ok. 20 minut. Zabieg charakteryzuje się umiarkowaną bolesnością, pacjenci porównują go do ukłucia komara.</p>  

                                <p>Zaleca się wykonanie serii co najmniej 4 zabiegów w odstępie 2 tygodni. Terapię należy powtórzyć po roku.</p>  

                                
                                <h3 class="title">PRZECIWWSKAZANIA</h3>
                                  <ul class="maxcoach-list">
                                  <li class="item" v-for="list in lists2" :key="list.id">
                                  <div class="icon">
                                  <i class="fas fa-check"></i>
                                  </div>
                                 <div class="text">{{ list }}</div>
                                 </li>
                                 </ul>
                                
                                
                              

                              </div>
                            </b-tab>
                            
                        </b-tabs>
                    </div>
                    <!-- Course Details Wrapper End -->
                </div>

                <div class="col-lg-4 col-12 order-lg-2 max-mb-50">
                    <DrCyjHairFillerDetailsSidebar />
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            CourseDetailsSidebar: () => import('~/components/DrCyjHairFillerDetailsSidebar'),            
        },
        data () {
            return {
                lists: [
                    "powstrzymuje wypadanie włosów”",
                    "przyśpiesza wzrost nowych włosów”",
                    "wzmacnia oraz regeneruje włosy", 
                    "pobudza krążenie i poprawia ukrwienie skóry głowy",
                    "rewitalizuje mieszki włosowe",
                    "wzmacnia włosy przed i po przeszczepie"
                    
                    
                                                    
                ],
                lists2: [
                    "ciąża",
                    "karmienie piersią",
                    "stany zapalne/ infekcje skóry głowy",
                    "aktywna cukrzyca",
                     "choroby autoimmunologiczne",
                     "uczulenie na którykolwiek ze składników"
                                                                           
                ]
            }
        }
    };

    
</script>
