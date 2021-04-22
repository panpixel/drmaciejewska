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
                                    <h3 class="title">CO TO JEST KWAS HIALURONOWY?</h3>
                                    <p>Kwas hialuronowy jest naturalną substancją występującą w naszej skórze. Odpowiada za utrzymanie w niej wody, a co się z tym wiąże jej jędrności i sprężystości. 
                                    Po 25. roku życia zaczyna się proces starzenia skóry, który polega na utracie kwasu hialuronowego. Oznacza to pojawianie się pierwszych zmarszczek, wysychanie i wiotczenie skóry oraz powolne opadanie tkanek. 
                                    Najlepszą metodą na powstrzymanie starzenia się skóry, wygładzenie zmarszczek oraz odbudowę utraconej objętości jest zastosowanie preparatu kwasu hialuronowego</p>                          
                                  
                                                            
                                 <h3 class="title">JAK DOBIERAMYY I PODAJEMY KWAS HIALURONOWY?</h3>
                                  <p>W zależności od problemu dobierany jest odpowiedni preparat, ponieważ dostępne są różne gęstości kwasu hialuronowego. 
                                  Kwas hialuronowy o drobnej cząsteczce i delikatnej strukturze dedykowany będzie do rewitalizacji i kondycjonowania skóry oraz wypełnienia drobnych zmarszczek. 
                                  Produkt gęsty posłuży do wypełnienia bruzd, odbudowy ust czy wolumetrycznej korekcji twarzy. Zabieg polega na wstrzyknięciu preparatu w odpowiednim rejonie i na właściwej dla niego głębokości .</p>
                                 

                                  <p>Dodatkową zaletą podania kwasu hialuronowego jest jego zdolność do stymulacji produkcji kolagenu, co oznacza, że po wchłonięciu się produktu skóra wygląda lepiej niż przed zabiegiem.</p>



                                 
                                     <h3 class="title">KWAS HIALURONOWY. ZASTOSOWANIE</h3>

                                  <ul class="maxcoach-list">
                                  <li class="item" v-for="list in lists" :key="list.id">
                                  <div class="icon">
                                  <i class="fas fa-check"></i>
                                  </div>
                                 <div class="text">{{ list }}</div>
                                 </li>
                                 </ul>

                                  <p>Soft-filling, soft-lifting, lifting hialuronowy, nici hialuronowe – są to synonimy techniki zastosowania kwasu hialuronowego za pomocą mikrokaniul (cienkich, miękkich i „tępo zakończonych igieł) 
                                  pozwalające na uzyskanie bardziej naturalnych efektów oraz zminimalizowania występowania siniaków i obrzęku.</p>

                                 <p> W trosce o bezpieczeństwo pacjenta wszystkie stosowane preparaty posiadają odpowiedni atest. Zostały dopuszczone przez odpowiednie służby do stosowania na terenie Polski.</p>
                                 
                                 <h3 class="title">Efekty</h3>
                                 <p>Podanie kwasu hialuronowego i likwidacja bruzd czy zmarszczek powoduje, że twarz staje się bardziej wypoczęta, zrelaksowana, młodsza – ponieważ wszelkie cienie powstałe w wyniku utraty objętości 
                                 policzków czy opadania tkanek sygnalizują zmęczenie i starzenie się skóry.</p>

                                <p>Czas utrzymywania się efektów zależy od wieku pacjenta, kondycji skóry i trybu życia – średnio około 8 miesięcy . 
                                Od kilku miesięcy (lekkie preparaty stosowane do powierzchownych zmarszczek) do kilkunastu miesięcy (wolumetria). 
                                Rezultaty widoczne są natychmiast, jednak przez 7-10 dni kwas stabilizuje swoją strukturę, w związku z czym należy delikatnie traktować okolicę poddaną zabiegowi.</p>


                                <h3 class="title">Zabieg</h3>

                                <p> W zależności od lokalizacji procedura przebiega po uprzednim znieczuleniu miejscowym specjalnym kremem lub przewodowym tzw. „stomatologicznym”. Zabieg trwa maksymalnie do 30 min.
                                Po iniekcji mogą się pojawić drobne siniaczki lub delikatna opuchlizna. Zabieg nie wymaga rekonwalescencji. 
                                Uczucie dyskomfortu ustępuje już po kilku godzinach, opuchlizna – po około jednym dniu, a z siniaczkami poradzi sobie makijaż korekcyjny.</p>


                                <h3 class="title">Kwas hialuronowy – przeciwwskazania</h3>
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
                    <CourseDetailsSidebar />
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
                    "wypełnienie „doliny łez” (zagłębienia biegnącego od wewnętrznego kącika oka do środkowej części policzka)",
                    "podkreślenie i odbudowa kości policzkowych",
                    "wypełnienie bruzd nosowo-wargowych",
                    "konturowanie i powiększenie ust",
                    "wypełnienie „linii marionetki”( linijne zagłębienie od kącików ust w dół do linii podbródka)",
                    "niechirurgiczna korekcja brody",                    
                ],
                lists2: [
                    "ciąża",
                    "karmienie piersią",
                    "wypełnienie bruzd nosowo-wargowych",
                    "choroby o podłożu autoimmunologicznym",
                    "stany zapalne skóry (opryszczka, trądzik)",
                    "choroby nowotworowe", 
                    "skłonność do blizn przerostowych",  
                    "nadwrażliwość na kwas hialuronowy",                   
                ]
            }
        }
    };

    
</script>
