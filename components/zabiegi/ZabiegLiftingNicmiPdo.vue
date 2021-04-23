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
                                    <h3 class="title">Lifting nićmi PDO</h3>
                                    <p>Lifting nićmi PDO jest alternatywą dla zabiegów chirurgicznego liftingu. Daje szybki efekt wygładzenia i napięcia skóry, stymuluje naturalną syntezę kolagenu, elastyny oraz kwasu hialuronowego 
                                    oraz angiogenezę w tkance podskórnej. Są one obecne w Polsce i na świecie od kilku lat i z powodzeniem stosowane w medycynie nie tylko estetycznej, ale także m.in. w okulistyce, ginekologii czy chirurgii. 
                                    Są one wprowadzane do tkanki podskórnej za pomocą mikrokaniul, dzięki czemu procedura jest atraumatyczna dla tkanek, a okres rekonwalescencji po zabiegu jest ograniczony do minimum.</p>                          
                                  
                                     <pZabieg ten jest dedykowany do osób w wieku 30 – 55lat.</p>

                                   
                                 
                                 
                                 <h3 class="title">Zalety procedury</h3>
                                 
                                  <ul class="maxcoach-list">
                                  <li class="item" v-for="list in lists" :key="list.id">
                                  <div class="icon">
                                  <i class="fas fa-check"></i>
                                  </div>
                                 <div class="text">{{ list }}</div>
                                 </li>
                                 </ul>

                                 <h3 class="title">Czym jest nić PDO?</h3>


                                <p>PDO to skrót od polidioxanonu – biokompatybilnego i resorbowalnego materiału o działaniu stymulującym na skórę. Polidioksanon jest pozbawiony właściwości antygenowych i pirogenicznych i 
                                w procesie absorpcji poprzez hydrolizę rozwija tylko łagodną reakcję tkanek w postaci neokolagenozy.
                                Do wyboru mamy wiele rodzajów nici (m.in. nici pojedyncze, podwójne, proste, skręcane, podwójnie skręcane) oraz kilka długości w zależności od potrzeb danej okolicy zabiegowej.</p>  

                                
                                <h3 class="title">Wskazania do zabiegu na twarzy:</h3>
                                  <ul class="maxcoach-list">
                                  <li class="item" v-for="list in lists2" :key="list.id">
                                  <div class="icon">
                                  <i class="fas fa-check"></i>
                                  </div>
                                 <div class="text">{{ list }}</div>
                                 </li>
                                 </ul>
                                
                                
                                 <p>Szczególnym rodzajem nici PDO są <strong>NICI HACZYKOWATE</strong>. Działają one silnie liftingująco zakotwiczając się w tkance podskórnej za pomocą wypustek (haczyków). 
                                 Pozwalają jeszcze silniej niż tradycyjne nici PDO unieść tkankę.</p> 

                                 <h3 class="title">Najlepiej sprawdzają się w zabiegach:</h3>
                                 <ul class="maxcoach-list">
                                  <li class="item" v-for="list in lists3" :key="list.id">
                                  <div class="icon">
                                  <i class="fas fa-check"></i>
                                  </div>
                                 <div class="text">{{ list }}</div>
                                 </li>
                                 </ul>


                                 
                                 <h3 class="title">PRZECIWSKAZANIA</h3>

                                <p>Przeciwwskazania do stosowania zabiegów z zastosowaniem nici PDO są ogólnymi przeciwwskazaniami do wykonywania innych zabiegów z zakresu medycyny estetycznej. Należą do nich m.in.:</p>  
                                    <ul class="maxcoach-list">
                                  <li class="item" v-for="list in lists4" :key="list.id">
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
                    <LiftingNicmiPdoDetailsSidebar />
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            CourseDetailsSidebar: () => import('~/components/LiftingNicmiPdoDetailsSidebar'),            
        },
        data () {
            return {
                lists: [
                    "Bezpieczna operacja",
                    "Szybka procedura (czas trwania około 30 minut)",
                    "Natychmiastowe wyniki", 
                    "Wysoka skuteczność",
                    "Brak nacięć i blizn",
                    "Efekt utrzymuje się przez 2 lata", 
                    "Nić całkowicie się wchłania, można powtarzać procedurę",
                    "Nici nie są widoczne i nie są wyczuwalne",
                    "Brak skutków ubocznych i komplikacji",
                    "Brak okresu regeneracji"
                                                    
                ],
                lists2: [
                    "Pionowe i poziome zmarszczki na czole",
                    "Lifting czoła, obniżone zewnętrzne krawędzie brwi, wiotka, miękka tkanka, opadające brwi",
                    "Dolna powieka – worki",
                    "Policzki",
                    "Wyraźny fałd nosowo-wargowy",
                    "Rowek policzkowo-jarzmowy",
                    "Fałd podbródkowy",
                    "Fałd marionetkowy",
                    "V-lifting",
                    "Opadające policzki i obszar pod dolną szczęką",
                    "Fałdy skóry na policzku",
                    "Pomarszczone policzki"
                                                        
                ],
                 lists3: [
                   "likwidacji tzw. chomiczków",
                    "konturowaniu linii żuchwy",
                    "modelowaniu pdbródka",                                  
                                                                       
                ],
                 lists4: [
                   "ciąża / laktacja",
                    "stany zapalne skóry i tkanki podskórnej",
                    "choroby autoimmunologiczne",
                    "zrosty i zwłóknienia w obrębie skóry i tkanek podskórnych",
                    "padaczka",
                    "choroby psychiczne",
                    "zaburzenia krzepliwości krwi",
                    "stosowanie kuracji antykoagulantami (kurację należy zaprzestać na minimum 14 dni przed planowanym zabiegiem)",                    
                                                                       
                ]
            }
        }
    };

    
</script>
