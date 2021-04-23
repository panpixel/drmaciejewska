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
                                    <h3 class="title">CO TO JEST OSOCZE BOGATOPŁYTKOWE?</h3>
                                    <p>Z wiekiem skóra traci blask i elastyczność, pojawiają się zmarszczki, bruzdy, przebarwienia. Wynika to ze spowolnienia procesu odnowy komórek – organizm przestaje sobie radzić z samodzielną regeneracją. 
                                    Osocze bogatopłytkowe (tzw. „wampirzy lifting”) to jeden z najpopularniejszych zabiegów z zakresu medycyny estetycznej ze względu na to, że jest całkowicie naturalny. 
                                    Jest bardzo bezpieczny i daje spektakularne efekty.</p>                          
                                  
                                     <p>Osocze bogatopłytkowe z języka angielskiego – PRP (Platelet Rich Plasma) to autologiczny, stężony preparat osocza bogatopłytkowego otrzymywany z własnych 
                                     płytek krwi z powiązanymi z nimi czynnikami wzrostu. Dzięki czynnikom wzrostu zawartym we krwi następuje pobudzenie fibroblastów do namnażania, wydzielania kolagenu i elastyny, które przebudowują skórę.</p>

                                     <p>Rewitalizacja skóry twarzy możliwa jest dzięki tzw. Autologicznej Odnowie Komórkowej (ACR – Autologous Cellular Regeneration) – czyli regeneracji komórek skóry dzięki 
                                     działaniu własnych czynników wzrostu i komórek macierzystych. Dajemy komórkom naszej skóry sygnał do odbudowy i rewitalizacji.</p>                       
                                                               
                                     <p>Osocze bogatopłytkowe to całkowicie naturalna i bezpieczna terapia odmładzająca, stymulująca organizm pacjenta do regeneracji komórek skóry i włosów. Rewitalizuje, ujędrnia, wygładza, 
                                     pobudza wzrost włosów, poprawia koloryt cery.</p>  
                                     
                                     
                                     
                                     <h3 class="title">DLA KOGO JEST OSOCZE BOGATOPŁYTKOWE?</h3>

                                     <p>Mezoterapia osoczem bogatopłytkowym przeznaczona jest dla wszystkich tych, których skóra wymaga regeneracji i odbudowy. 
                                     Z uwagi na wykorzystanie w pełni naturalnego preparatu z własnej krwi pacjenta zabieg jest idealny dla alergików. 
                                     Szczególnie polecana dla osób, które pragną uzyskać naturalny efekt odmłodzenia skóry bez potrzeby przeprowadzania inwazyjnych procedur medycznych.</p>

                                 
                                 
                                 <h3 class="title">WSKAZANIA</h3>
                                 
                                  <ul class="maxcoach-list">
                                  <li class="item" v-for="list in lists" :key="list.id">
                                  <div class="icon">
                                  <i class="fas fa-check"></i>
                                  </div>
                                 <div class="text">{{ list }}</div>
                                 </li>
                                 </ul>

                                 <h3 class="title">CZY ZABIEG JEST BOLESNY?</h3>


                                <p>Zabieg jest odrobinę bolesny. Podawanie osocza bogatopłytkowego przypomina zabieg mezoterapii, przy pomocy bardzo cienkiej igły lekarz wprowadza uzyskany preparat w okolice wymagające odmłodzenia. 
                                W celu poprawy komfortu stosuje się znieczulenie miejscowe.</p>  

                                 <h3 class="title">ZALECENIA PRZEDZABIEGOWE</h3>


                               <p>Nie jest wymagane wcześniejsze przygotowanie. Zabieg mezoterapii z użyciem osocza bogatopłytkowego przeprowadzany w gabinecie to zabieg szybki i prosty. 
                               W pierwszej fazie lekarz pobiera określoną ilość krwi pacjenta do specjalnych probówek. Materiał poddawany jest wirowaniu w specjalnej wirówce medycznej. 
                               Otrzymane w ten sposób PRP o wysokim stężeniu podawane jest bezpośrednio po odwirowaniu w wybranej okolicy twarzy lub ciała. 
                               Zabieg wykonany techniką klasycznej mezoterapii w postaci iniekcji aktywowanego osocza lub liniowo wzdłuż zmarszczek i fałdów skóry. 
                               W celu uzyskania najlepszych efektów zaleca się wykonanie 3 zabiegów w odstępach 3-4 tygodni. Dla podtrzymania efektu zaleca się powtarzać zabieg co 6 miesięcy. 
                               Zabieg przeciw wypadaniu włosów można łączyć z zabiegami mezoterapii na wzmocnienie włosów z wykorzystaniem preparatów pobudzających wzrost.</p> 
                                
                              
                                <h3 class="title">ZALECENIA POZABIEGOWE:</h3>

                                <p>Bezpośrednio po zabiegi skóra jest zaczerwieniona, mogą pojawić się drobne krwiaki i obrzęk. Zmiany te ustępują samoistnie po paru dniach i nie wymagają leczenia. 
                                Po zabiegu zaleca się utrzymać skórę w czystości, unikać miejsc sprzyjających zakażeniom (sauna, basen) oraz solarium.</p>  




                                <h3 class="title">PRZECIWSKAZANIA:</h3>
                                  <ul class="maxcoach-list">
                                  <li class="item" v-for="list in lists2" :key="list.id">
                                  <div class="icon">
                                  <i class="fas fa-check"></i>
                                  </div>
                                 <div class="text">{{ list }}</div>
                                 </li>
                                 </ul>
                                
                                
                                 
                                 <h3 class="title">DZIAŁANIA NIEPOŻĄDNE</h3>

                                <p>Prawidłowo pobrana i odwirowana krew oraz poprawnie wykonany zabieg nie niosą ze sobą żadnego ryzyka niebezpiecznych powikłań.</p>  
                                 

                              </div>
                            </b-tab>
                            
                        </b-tabs>
                    </div>
                    <!-- Course Details Wrapper End -->
                </div>

                <div class="col-lg-4 col-12 order-lg-2 max-mb-50">
                    <OsoczeDetailsSidebar />
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            CourseDetailsSidebar: () => import('~/components/OsoczeDetailsSidebar'),            
        },
        data () {
            return {
                lists: [
                    "rewitalizacja skóry twarzy, okolicy oczu, szyi, dekoltu, dłoni",
                    "skóra zmęczona, bez napięcia, o niejednolitym kolorze, skóra wysuszona, wiotka, pozbawiona blasku, z oznakami starzenia i zmniejszonej gęstości",
                    "fotostarzenie (photoaging)", 
                    "korekcja zmarszczek i fałd",
                    "blizny i rozstępy",
                    "regeneracja skóry po inwazyjnych zabiegach medycyny estetycznej (regeneracja skóry, przyspieszenie gojenia)", 
                    "wypełnienie blizn potrądzikowych",
                    "łysienie typu męskiego oraz w przypadku słabej kondycji włosów i złego stanu skóry głowy",
                    "dla pacjentów poszukujących produktów naturalnych",
                    "dla osób skłonnych do alergii",
                    "po przeszczepach włosów jako kuracja uzupełniająca"                                  
                ],
                lists2: [
                    "ciąża i okres karmienia piersią",
                    "choroby krwi",
                    "nowotwory",
                    "przyjmowanie leków wydłużających czas krwawienia (np. aspiryna)",
                    "opryszczka lub inny stan zapalny skóry",
                    "niewyrównana cukrzyca"
                                                        
                ]
                
            }
        }
    };

    
</script>
