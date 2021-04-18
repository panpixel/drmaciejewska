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
                                    <h3 class="title">Pełne i wydatne usta</h3>
                                    <p>Pełne i wydatne usta o regularnym konturze to marzenie wielu kobiet. Obecnie jedną z najpopularniejszych metod poprawiania wyglądu stało się powiększanie ust za pomocą kwasu hialuronowego. 
                                    Zabieg ten jest polecany kobietom, które chcą uwydatnić zbyt mało wykształconą wargę górną lub dolną. Kwas hialuronowy właściwie podany podkreśla odpowiedni kontur warg. 
                                    Przychodzi z pomocą kobietom które dostrzegają zmiany wynikające z postępującego procesu starzenia się ust związanego z odwodnieniem czerwieni wargowej. 
                                    Powiększanie ust, korekta bądź nawilżenie wykonywane jest u pacjentów w każdym wieku. Z zabiegu korzystają zarówno kobiety jak i mężczyźni.</p>

                                    <p>Kwas hialuronowy to substancja naturalna, która pozwala na powiększenie lub tylko nieznaczne uwydatnienie ust, poprawienie konturu, nawilżenie, usunięcie zmarszczek wokół nich. 
                                    W rezultacie uzyskujemy efekt odmłodnienia. Kwas hialuronowy stosowany do powiększania ust jest substancją syntetyczną całkowicie przyswajalną przez organizm, nie powodując 
                                    efektów ubocznych a rezultaty jego działania są natychmiastowe. Przed zabiegiem odbywa się konsultacja z lekarzem celem poznania pacjenta i dobrania odpowiedniej gęstości i rodzaju preparatu. 
                                    Dobrany preparat wstrzykuje się cienką igłą w odpowiednie miejsca warg, w taki sposób, aby uzyskać wymarzony efekt powiększenia i wymodelowania ust.</p>
                                  
                                  <h3 class="title">Powiększenie ust – czy zabieg jest bolesny?</h3>
                                 <p>Ze względu na duże uwrażliwienie okolicy ust oraz w celu poprawienia komfortu pacjentki stosowane jest znieczulenie miejscowe przy pomocy kremu znieczulającego (ok. 20 min przed zabiegiem). 
                                 Cała procedura trwa około 30 minut. </p>

                                  <h3 class="title">Powiększenie ust – wskazania</h3>
                                  <ul class="maxcoach-list">
                                  <li class="item" v-for="list in lists" :key="list.id">
                                  <div class="icon">
                                  <i class="fas fa-check"></i>
                                  </div>
                                 <div class="text">{{ list }}</div>
                                 </li>
                                 </ul>
                                
                                 <h3 class="title">Zalecenia przedzabiegowe</h3>
                                  <p>Zabieg modelowania ust nie wymaga żadnych wcześniejszych przygotowań. Na około 3-4 dni przed zabiegiem nie należy zażywać aspiryny oraz stosować leków przeciwzapalnych. 
                                    W dniu zabiegu zaleca się unikać sauny, solarium, promieni słonecznych oraz intensywnego wysiłku fizycznego.</p>
                                 
                                 <h3 class="title">Zalecenia pozabiegowe</h3>
                                  <p>Bezpośrednio po zabiegu należy unikać dotykania i masowania miejsc iniekcji oraz ograniczyć ekspresję wokół ust. 
                                  Okolicę poddaną zabiegowi należy zachować w czystości i sterylności przez 24 godziny. Na około 3-4 dni po zabiegu zaleca się także ograniczenie ekspozycji na promienie słoneczne oraz ciepło (solarium, sauna). 
                                  Przez 2 tygodnie po wykonanym zabiegu należy stosować krem z wysokim filtrem przeciwsłonecznym.</p>

                                <h3 class="title">Powiększenie ust – przeciwwskazania</h3>
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
            CourseDetailsSidebar: () => import('@/components/CourseDetailsSidebar'),
            CourseInstructor: () => import('@/components/CourseInstructor'),
        },
        data () {
            return {
                lists: [
                    "małe, wąskie, asymetryczne usta",
                    "zanik barwnika",
                    "wypełnienie zmarszczek wokół ust (tzw. „zmarszczek palacza”)",
                    "redukcja opadających kącików ust",
                    "podkreślenie konturu ust",
                    "nawilżenie ust",
                ],
                lists2: [
                    "ciąża i okres karmienia piersią",
                    "choroby autoimmunologiczne",
                    "infekcje (trądzik, opryszczka)",
                    "skłonność do blizn przerostowych",
                    "nadwrażliwość na kwas hialuronowy",
                    
                ]
            }
        }
    };

    
</script>
