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
                                    <h3 class="title">CO TO JEST TOKSYNA BOTULINOWA (BOTOKS)?</h3>
                                    <p>Toksyna botulinowa potocznie określana jako botoks jest lekiem stosowanym w medycynie od ponad 30 lat. Jest skutecznym zabiegiem o szerokim zastosowaniu przeciwzmarszczkowym, który pozwala 
                                    wygładzić i spłycić zmarszczki mimiczne. Podana w odpowiedni mięsień blokuje przekazywanie impulsów pomiędzy nerwami a mięśniami. 
                                    Taka blokada ma charakter czasowy i działa od 4 do 9 miesięcy. Ostrzyknięty mięsień ulega rozluźnieniu, dzięki czemu skóra przestaje się marszczyć, zagniatać i fałdować. 
                                    Efektem jest przywrócenie młodszego i zrelaksowanego wyglądu.</p>                          
                                  
                                     <pPodanie toksyny botulinowej nie wymaga żadnych szczegółowych badań diagnostycznych. Preparat wstrzykiwany jest w kilka miejsc na twarzy przy użyciu jednorazowej strzykawki z bardzo cienką igłą. 
                                     Zabieg trwa około 10-20 minut w zależności od liczby leczonych miejsc. Preparat zaczyna działać po ok. 2-3 dniach od wstrzyknięcia, a pełen efekt jest widoczny dopiero po 7-10 dniach.</p>

                                   
                                                                  
                                 <h3 class="title">WSKAZANIA (BOTOKS)</h3>
                                 
                                  <ul class="maxcoach-list">
                                  <li class="item" v-for="list in lists" :key="list.id">
                                  <div class="icon">
                                  <i class="fas fa-check"></i>
                                  </div>
                                 <div class="text">{{ list }}</div>
                                 </li>
                                 </ul>

                                 <h3 class="title">CZY ZABIEG JEST BOLESNY?</h3>


                                <p>Ból związany z zabiegiem jest minimalny, wielu pacjentów porównuje go do ugryzienia przez mrówkę lub komara. Zabieg nie wymaga znieczulenia miejscowego.</p>  

                                
                                <h3 class="title">ZALECANIA PRZEDZABIEGOWE</h3>
                                  <ul class="maxcoach-list">
                                  <li class="item" v-for="list in lists2" :key="list.id">
                                  <div class="icon">
                                  <i class="fas fa-check"></i>
                                  </div>
                                 <div class="text">{{ list }}</div>
                                 </li>
                                 </ul>
                                
                                
                               <h3 class="title">Jak działa toksyna botulinowa?</h3>


                                 <p>W przypadku skurczu mięśni sygnał chemiczny przekazywany jest za pomocą neurotransmitera o nazwie acetylocholina. 
                                 Toksyna botulinowa wywołuje osłabienie i porażenie mięśni poprzez blokowanie uwalniania acetylocholiny na poziomie połączenia nerwowo-mięśniowego 
                                 mięśni szkieletowych, hamując tym samym przekazywanie impulsów nerwowych przez połączenie synaptyczne do części ruchowej płytki. 
                                 Do tej pory nie stwierdzono żadnych cech degradacji lub zaniku włókien mięśniowych w wyniku długotrwałego korzystania z zabiegów. 
                                 Botoks powoduje także zahamowanie czynności gruczołów potowych i łojowych.</p> 

                                  <h3 class="title">ZALECANIA POZABIEGOWE</h3>
                                 
                                 <p>W ciągu 4 godzin po zabiegu nie można pochylać głowy do dołu. Po zakończeniu zabiegu pacjent może powrócić do swojej codziennej aktywności, ponieważ ślady po wkłuciach są praktycznie niewidoczne. 
                                 Pacjent przez 24h od podania toksyny botulinowej powinien unikać wahań temperatury i nie korzystać z sauny, solarium, łaźni parowych i krioterapii oraz unikać ekspozycji na słońce</p> 

                                 <h3 class="title">Jak długo utrzymują się rezultaty zabiegu z użyciem toksyny botulinowej?</h3>
                                 <p>Efekty zabiegu z toksyną botulinową utrzymują się przez okres ok. 4–9 miesięcy, zależnie od indywidualnych predyspozycji pacjenta.   </p>


                                 
                                 <h3 class="title">PRZECIWWSKAZANIA</h3>
                                 <ul class="maxcoach-list">
                                  <li class="item" v-for="list in lists3" :key="list.id">
                                  <div class="icon">
                                  <i class="fas fa-check"></i>
                                  </div>
                                 <div class="text">{{ list }}</div>
                                 </li>
                                 </ul>



                                 
                                 <h3 class="title">DZIAŁANIA NIEPOŻĄDNE</h3>

                                <p>W miejscu iniekcji mogą pojawić się zaczerwienienie i zgrubienia, które ustępują w ciągu kilku godzin. Negatywne następstwa i powikłania po zabiegu z toksyną botulinową 
                                zdarzają się bardzo rzadko; można podzielić je na miejscowe, immunologiczne i ogólne. Niewielki obrzęk okolicy zabiegowej, ból, uczucie napięcia i punktowe zaczerwienienie w miejscach 
                                wkłucia to naturalna reakcja na toksynę botulinową. Objawy te ustępują zazwyczaj po 3–5 dniach od zabiegu.</p>  
                                <p>   Do powikłań zalicza się natomiast: asymetrię, nadmierne zwiotczenie mięśni 
                                (opadanie powieki górnej lub kącików ust), problemy z mimiką twarzy, a także przemijające bóle głowy lub twarzy oraz podwójne widzenie. Niezwykle rzadko występują mdłości i/lub wymioty, objawy grypowe, 
                                problemy z układem oddechowym, gorączka, wysypka czy też nadwrażliwość na składniki preparatu.</p>  
                                  

                              </div>
                            </b-tab>
                            
                        </b-tabs>
                    </div>
                    <!-- Course Details Wrapper End -->
                </div>

                <div class="col-lg-4 col-12 order-lg-2 max-mb-50">
                    <ToksynaBotulinowaDetailsSidebar />
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            CourseDetailsSidebar: () => import('~/components/ToksynaBotulinowaDetailsSidebar'),            
        },
        data () {
            return {
                lists: [
                    "okolica między brwiami tzw. „lwia zmarszczka”",
                    "wokół oczu tzw. „kurze łapki”",
                    "zmarszczki poprzeczne czoła", 
                    "„zmarszczki palacza” wokół ust",
                    "zmarszczki powiek dolnych",
                    "leczenie bruksizmu", 
                    "leczenie nadpotliwości",
                    "broda marmurkowa",
                    "migrena przewlekła"
                    
                                                    
                ],
                lists2: [
                    "na 7 dni przed zabiegiem należy unikać przyjmowania leków hamujących agregację płytek krwi (po konsultacji z lekarzem prowadzącym)",
                    "na 5 dni przed zabiegiem zaprzestać przyjmowania niesteroidowych leków przeciwzapalnych",
                    "w dniu zabiegu unikać wahań temperatury i nie korzystać z sauny, solarium, łaźni parowych i krioterapii oraz unikać ekspozycji na słońce",
                    "w dniu zabiegu nie nakładać makijażu i nie wykonywać innych czynności, które niosłyby ryzyko zainfekowania miejsc iniekcji (np. dotykanie, pocieranie, masaż)"
                                                                           
                ],
                 lists3: [
                   "ciąża i okres karmienia piersią",
                    "aktywne infekcje bakteryjne i wirusowe",
                    "choroby układu sercowo-naczyniowego", 
                    "choroby nowotworowe",
                    "choroby pęcherzowe skóry", 
                    "zaburzenia przewodnictwa nerwowo-mięśniowego (miastenia gravis, zespół Lamberta Eatona)",   
                    "przewlekłe choroby autoimmunologiczne, np. RZS", 
                    "niewyrównana cukrzyca",  
                    "nadwrażliwość na składniki preparatu (albuminy ludzkie)",   
                    "miesiączka", 
                    "ogólny zły stan zdrowia np. przeziębienie",                                
                                                                       
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
