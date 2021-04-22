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
                                    <h3 class="title">Leczenie nadpotliwości</h3>
                                    <p>Właściwą funkcją organizmu jest wydzielanie potu ale jego nadmiar jest bardzo kłopotliwy. Nadpotliwość to dolegliwość uciążliwa w codziennym życiu zarówno dla kobiet jak i mężczyzn. 
                                    Obniża komfort życia i często staje się przyczyną złego samopoczucia. Na rynku medycyny estetycznej jednym z najskuteczniejszych sposobów leczenia nadpotliwości jest toksyna botulinowa. 
                                    To obecnie najszerzej stosowana i polecana metoda. Botoks hamuje wydzielanie acetylocholiny (neuroprzekaźnika), przez co następuje blokada zakończeń nerwowych gruczołów potowych, a w efekcie brak pocenia się. </p>  
                                    <p>Zabieg nie usuwa przyczyny nadpotliwości, ale skutecznie usuwa jej objawy. Blokada zakończeń nerwowych utrzymuje się przez 6-12 miesięcy. 
                                    To oznacza, że efekt leczenia utrzymuje się przez kilka miesięcy aż w końcu zanika.</p>                          
                                  
                                                            
                                                               
                                     <h3 class="title">LECZENIE NADPOTLIWOŚCI – WSKAZANIA</h3>

                                  <ul class="maxcoach-list">
                                  <li class="item" v-for="list in lists" :key="list.id">
                                  <div class="icon">
                                  <i class="fas fa-check"></i>
                                  </div>
                                 <div class="text">{{ list }}</div>
                                 </li>
                                 </ul>

                                
                                <h3 class="title">LECZENIE NADPOTLIWOŚCI  – przeciwwskazania</h3>
                                  <ul class="maxcoach-list">
                                  <li class="item" v-for="list in lists2" :key="list.id">
                                  <div class="icon">
                                  <i class="fas fa-check"></i>
                                  </div>
                                 <div class="text">{{ list }}</div>
                                 </li>
                                 </ul>
                                
                                                     
                                 
                                 <h3 class="title">CZY ZABIEG JEST BOLESNY?</h3>

                                <p>Dla większości ludzi zabieg ten jest minimalnie bolesny ale ze względu na komfort pacjenta możliwe jest znieczulenie miejscowe. 
                                Z reguły zabieg wykonywany na rękach i stopach wymaga znieczulenia.</p>  

                                <h3 class="title">ZALECENIA PRZEDZABIEGOWE</h3>
                                <p>Leczenie rozpoczyna się od określenia przez lekarza obszarów nadmiernej potliwości. W tym celu wykonywany jest test Minora, czyli próba jodowo– -skrobiowa. 
                                Głównym celem tej próby jest określenie powierzchni skóry, która nadmiernie produkuje pot i którą należy poddać leczeniu. 
                                Obszar ten w próbie Minora zabarwia się na kolor brunatno- oletowy.</p>  

                                <h3 class="title">ZALECENIA POZABIEGOWE</h3>
                                <p>Po terapii może się pojawić lekkie zaczerwienienie i obrzęk, który powinien ustąpić w ciągu paru dni. Do kilku godzin po zabiegu może też występować miejscowa bolesność, która szybko zaniknie.</p>  

                                <h3 class="title">DZIAŁANIA NIEPOŻĄDNE</h3>
                                 <p>Wg statystyk 90% leczonych reaguje dobrze. Są jednak osoby, u których po wykonaniu zabiegu nie ma efektu lub efekt ten jest niezadowalający. 
                                 Dzieje się tak u 10% pacjentów i tym pozostaje leczenie farmakologiczne, stosowanie antyperspirantów i innych metod leczenia.</p>  

                              </div>
                            </b-tab>
                            
                        </b-tabs>
                    </div>
                    <!-- Course Details Wrapper End -->
                </div>

                <div class="col-lg-4 col-12 order-lg-2 max-mb-50">
                    <LeczenieNadpotliwosciDetailsSidebar />
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            CourseDetailsSidebar: () => import('~/components/KwasHialuronowyDetailsSidebar'),            
        },
        data () {
            return {
                lists: [
                    "dłonie",
                    "stopy",
                    "doły pachowe",                                   
                ],
                lists2: [
                    "ciąża i karmienie piersią",
                    "zaburzenia przewodnictwa nerwowo-mięśniowego (miastenia gravis, zespół Lamberta-Eatona-Rooke’a)",
                    "nadwrażliwość na toksynę botulinową lub jakikolwiek składnik leku (albuminy ludzkie)",
                    "miejscowe infekcje skóry",
                    "choroba nowotworowa",
                    "poważne zaburzenia krzepnięcia krwi", 
                    "stosowanie leków antykoagulacyjnych (np. aspiryna)",                                      
                ]
            }
        }
    };

    
</script>
