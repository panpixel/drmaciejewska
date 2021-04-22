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
                                    <h3 class="title">CO TO JEST BRUKSIZM?</h3>
                                    <p>Bruksizm to podświadome (mimowolne) zgrzytanie i zaciskanie zębów. Siły wyzwalane na zęby mogą być tu nawet 10 razy większe od tych działających podczas normalnych procesów żucia i gryzienia. </p>
                                    <p>Bruksizm dzienny (centryczny) cechuje zaciskanie zębów ze znaczną siłą, z kolei bruksizm nocny (ekscentryczny) polega na mimowolnym zaciskaniu i zgrzytaniu zębami podczas snu. 
                                    Ten typ bruksizmu zaliczany jest do tzw. parasomnii, czyli podgrupy zaburzeń snu.  </p>
                                    <p>Ze względu na to, że dolegliwości spowodowane są nadmiernym napięciem mięśni, skutecznym sposobem na wyleczenie bruksizmu jest ostrzyknięcie toksyną botulinową 
                                    odpowiednich mięśni (odpowiadających za przywodzenie żuchwy), co zmniejsza ich napięcie i ból, a co za tym idzie uniemożliwia zaciskanie zębów. 
                                    Po pewnym czasie zanika również objaw zgrzytania zębami, rysy twarzy w okolicy szczęki ulegają złagodzeniu i odmłodzeniu. </p>
                                     <p>Skutkiem ubocznym tego zabiegu jest wizualnie szczuplejsza twarz. 
                                    Pierwsze efekty pojawiają się już po tygodniu, a pełen rezultat po około 2-3 tygodniach. Działanie toksyny botulinowej utrzymuje się przez około 4-8 miesięcy, ponieważ organizm wytwarza nowe włókna nerwowe. 
                                    Dlatego też po upływie tego czasu zabieg należy powtórzyć.</p>

                                    
                                  
                                 <p>Leczenie bruksizmu pozwoli uchronić nas przed wieloma poważnymi konsekwencjami, dlatego warto zgłosić się do specjalisty i zdiagnozować go jak najszybciej. </p>

                                                                 
                                 <h3 class="title">WSKAZANIA BRUKSIZM</h3>
                                  <p>Bruksizm to nie tylko zaburzenie snu i towarzyszący temu dyskomfort ale także ból żuchwy, mrowienie, silne bóle głowy. 
                                  Bruksizm może prowadzić do pękania szkliwa, niefizjologicznego ścierania zębów, a długofalowo do zmian zwyrodnieniowych w stawach skroniowo-żuchwowych czy zaostrzenia rysów twarzy („twarz kwadratowa”). 
                                  Bezpośrednia patogeneza bruksizmu nie została do końca poznana. Określono jednak kilka czynników, które prawdopodobnie zwiększają ryzyko jego wystąpienia. 
                                  Wśród głównych przyczyn wymienia się między innymi stres i nerwicę. 
                                  Dodatkowo do jego wystąpienia mogą przyczyniać się różnego rodzaju wady zgryzu, które zaburzają prawidłowe ustawienie zębów szczęki i żuchwy, a także niektóre choroby pasożytnicze (np. owsica).</p>
                                 


                                 <h3 class="title">BRUKSIZM- CZY ZABIEG JEST BOLESNY?</h3>
                                  <p>Zabieg z wykorzystaniem toksyny botulinowej jest bezpieczny i właściwie bezbolesny. Pacjent może jedynie odczuwać dyskomfort związany z wkłuciem igły, dlatego u pacjentów, którzy 
                                  charakteryzują się wysoką wrażliwością na bodźce bólowe, możliwe jest zastosowanie znieczulenia miejscowego maścią znieczulającą.</p>



                                   <h3 class="title">ZALECENIA PRZEDZABIEGOWE</h3>
                                 <p> Podanie toksyny botulinowej nie wymaga żadnych szczególnych badań diagnostycznych.</p>

                                     <h3 class="title">ZALECENIA POZABIEGOWE</h3>
                                 <p>Przez kolejne kilka tygodni po zabiegu należy unikać zabiegów wykorzysujących fale radiowe, głęboką podczerwień czy zabiegów laserowych, korzystania z solarium oraz sauny, ponieważ spowodują one osłabienie działania preparatu.</p>

                                 <h3 class="title">Bruksizm – przeciwwskazania</h3>
                                  <ul class="maxcoach-list">
                                  <li class="item" v-for="list in lists" :key="list.id">
                                  <div class="icon">
                                  <i class="fas fa-check"></i>
                                  </div>
                                 <div class="text">{{ list }}</div>
                                 </li>
                                 </ul>


                                <h3 class="title">Bruksizm – przeciwwskazania</h3>
                                  <ul class="maxcoach-list">
                                  <li class="item" v-for="list in lists2" :key="list.id">
                                  <div class="icon">
                                  <i class="fas fa-check"></i>
                                  </div>
                                 <div class="text">{{ list }}</div>
                                 </li>
                                 </ul>
                                
                                <h3 class="title">Działania niepożądane</h3>
                                  <p>Bezpośrednio po zabiegu mogą wystąpić reakcje typowe dla każdej iniekcji. Skóra wokół ust może być nabrzmiała, sina i zaczerwieniona. 
                                  Może pojawić się krwiak. Objawy te ustępują zwykle samoistnie w ciągu kilku dni.</p>                          
                                 
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
            CourseDetailsSidebar: () => import('~/components/BruksizmDetailsSidebar'),            
        },
        data () {
            return {
                lists: [
                    "Ciąża i karmienie piersią",
                    "Aktywne infekcje bakteryjne i wirusowe",
                    "Choroby układu sercowo-naczyniowego",
                    "Choroby nowotworowe",
                    "Choroby pęcherzowe skóry",
                    "Zaburzenia przewodnictwa nerwowo-mięśniowego (miastenia gravis, zespół Lamberta Eatona)",
                    "Przewlekłe choroby autoimmunologiczne, np. RZS",
                    "Niewyrównana cukrzyca",
                    "Nadwrażliwość na składniki preparatu (albuminy ludzkie)",
                    "Miesiączka",
                    "Ogólny zły stan zdrowia np. przeziębienie",
                ]
            }
        }
    };

    
</script>
