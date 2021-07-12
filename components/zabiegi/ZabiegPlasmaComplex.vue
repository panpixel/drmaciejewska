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
                                    <h3 class="title">Co to jest Plasma Complex?</h3>
                                    <p>Plasma Complex to autologiczny zabieg, w którym wykorzystywana jest synergia działania własnych komórek macierzystych oraz fibryny strukturalnej. Zabieg PLASMA COMPLEX jest całkowicie naturalny. 
                                    Pod skórę nie wstrzykuje się żadnych wypełniaczy, a jej powierzchnia jest ostrzykiwana jedynie komórkami z własnej krwi pacjenta, a więc idealnie tolerowana przez organizm.   
                                    Wykorzystuje się do tego uzyskane z niej komórki macierzyste i fibrynę strukturalną – biorą one udział w regeneracji tkanek, np. po urazach czy skaleczeniach. 
                                    Krew, która zostanie wykorzystana do zabiegu pobiera się w identyczny sposób, jak w trakcie wykonywania morfologii (ukłucie następuje po wewnętrznej stronie przedramienia w okolicy łokcia). 
                                    Krew pobierana jest dwukrotnie i również dwa razy odwirowana. 
                                    Uzyskuje się w ten sposób dwa rodzaje fibryny (białko wytrącające się z osocza krwi podczas jej krzepnięcia) – zawierającej komórki macierzyste, czynniki wzrostu, cytokiny i leukocyty niezbędne 
                                    do odbudowy tkanki i tzw. fibrynę strukturalną, która tworzy „stelaż” dla nowo tworzonej tkanki skóry.                                  
                                    
                                    
                                    </p>                          
                                  
                                     <h3 class="title">EFEKTY ZABIEGU </h3>
                                     <p>            
                                       Spektakularne efekty zabieg zawdzięcza temu, że jest terapią z użyciem komórek macierzystych. Mają one wielki potencjał regeneracyjny (mogą odtworzyć każda tkankę, której w miejscu ich działania 
                                       potrzebuje organizm w procesie regeneracji). Komórki macierzyste mają unikalne zdolności – potrafią samoodnawiać się, ulegać nieograniczonej liczbie podziałów i przekształcać się w wyspecjalizowane 
                                       komórki innych tkanek. Wykorzystanie ich we wspomnianym zabiegu sprawia, że uruchomiony zostaje proces namnażania się i odkładania w szkielecie fibrynowym fibroblastów, komórek naskórka, śródbłonka, 
                                       następuje synteza kolagenu, a nawet tworzą się nowe naczynia krwionośne, w tym przypadku prawidłowo zbudowane. </p>
                                    
                                   <p>   Zabieg poprawia napięcie skóry – staje się ona bardziej sprężysta. Efekt jest nie tylko wizualny – dotykając opuszkami palców także mamy wrażenie jej wypełnienia. 
                                   Poprawia się gęstość, odżywienie i ukrwienie skóry. Zmniejszają się (dzięki stopniowemu wypełnianiu) ubytki tkankowe, spłycają zmarszczki i blizny pozostałe np. po trądziku czy oparzeniach. 
                                   Po kilku miesiącach (czas pełnego wytworzenia się nowego kolagenu wynosi ok. pół roku) osiągamy pełen efekt przebudowy i odbudowy tkanki skórnej. Będzie on długotrwały, bo PLASMA COMPLEX stymuluje 
                                   przebudowę wszystkich warstw skóry, nie tylko najbardziej powierzchniowej.
                                </p>

                                <blockquote class="block-quote">
                                            <p> Dlatego, jeśli zdecydujemy się na trzy zabiegi, czwarty wykonuje się po pół roku. Kolejne, dla podtrzymania efektu po kolejnym. </p>
                                </blockquote>

                               
                              </div>
                            </b-tab>
                            
                        </b-tabs>
                    </div>
                    <!-- Course Details Wrapper End -->
                </div>

                <div class="col-lg-4 col-12 order-lg-2 max-mb-50">
                    <PlasmaComplexDetailsSidebar />
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            CourseDetailsSidebar: () => import('~/components/PlasmaComplexDetailsSidebar'),            
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
