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
                                    <h3 class="title">Mezoterapia NCTF 135HA</h3>
                                    <p>Mezoterapia jest metodą stosowaną od wielu lat na całym świecie w celu miejscowej rewitalizacji skóry. Zabieg polega na podawaniu małych ilości substancji leczniczej punkt po punkcie na
                                     określonym obszarze ciała za pomocą iniekcji.</p>                          
                                  
                                     <p>NCTF 135 HA to znakomicie opracowany skład chemiczny zapewniający wysoką jakość zabiegów i uzyskanie pożądanych efektów u pacjenta. 
                                     Czysty biologicznie kompleks polirewitalizujący oparty na związkach biologicznie czynnych stosowany jako mezoterapia igłowa. Może być również łączony z terapią Dermapen</p>

                                     <p>Zawiera między innymi kwas hialuronowy o wysokim stężeniu (5 mg/ml) oraz witaminy, aminokwasy, minerały, koenzymy, kwasy nukleinowe oraz substancje reaktywne!</p>                       
                                                               
                                     <h3 class="title">Efekty stosowania NCTF 135 HA</h3>

                                  <ul class="maxcoach-list">
                                  <li class="item" v-for="list in lists" :key="list.id">
                                  <div class="icon">
                                  <i class="fas fa-check"></i>
                                  </div>
                                 <div class="text">{{ list }}</div>
                                 </li>
                                 </ul>

                                
                                <p>Zaletą mezoterapii igłowej z wykorzystaniem gamy NCTF jest fakt, że jest to terapia w pełni biologiczna. To kuracja rewitalizująca, którą można stosować latami bez większego ryzyka. 
                                Dostarcza komórkom naturalnych składników odżywczych niezbędnych do prawidłowego funkcjonowania.</p>  

                               <p> Poprawa stanu skóry podczas podjętej kuracji jest stopniowa. Niemniej rezultaty są widoczne od pierwszego zabiegu – skóra jest bardziej nawilżona i napięta. Efekty kumulują się i po kilku 
                               zabiegach skóra nabiera blasku i staje się gładsza, jej struktura ulega polepszeniu, staje się gęstsza i bardziej jędrna.</p> 
                                
                              
                                <h3 class="title">WSKAZANIA:</h3>   
                                  <ul class="maxcoach-list">
                                  <li class="item" v-for="list in lists2" :key="list.id">
                                  <div class="icon">
                                  <i class="fas fa-check"></i>
                                  </div>
                                 <div class="text">{{ list }}</div>
                                 </li>
                                 </ul>
                                
                                 <h3 class="title">CZĘSTOTLIWOŚĆ ZABIEGU:</h3>    

                                  <ul class="maxcoach-list">
                                  <li class="item" v-for="list in lists3" :key="list.id">
                                  <div class="icon">
                                  <i class="fas fa-check"></i>
                                  </div>
                                 <div class="text">{{ list }}</div>
                                 </li>
                                 </ul>

                                 
                                 <h3 class="title">CZY ZABIEG JEST BOLESNY?</h3>

                                <p>Zabiegi są nieznacznie bolesne. Jeśli pacjent ma niski próg wrażliwości na ból, można zastosować znieczulenie kremem.</p>  

                                <p>Mezoterapię wykonuje się strzykawką o bardzo cienkiej igle. W zależności od zastosowanej techniki powstają na skórze niewielkie punkciki lub kratki. 
                                NCTF 135HA może być używane podczas zabiegu urządzeniem Dermapen</p>  

                                 <h3 class="title">PRZECIWSKAZANIA:</h3>    

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
                    <MezoterapiaDetailsSidebar />
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            CourseDetailsSidebar: () => import('~/components/MezoterapiaDetailsSidebar'),            
        },
        data () {
            return {
                lists: [
                    "Aktywna regeneracja uszkodzeń skóry (synergiczne działanie składników odżywczych z kwasem hialuronowym poprawia gojenie uszkodzeń skóry i przyspiesza regenerację komórkową)",
                    "Aktywne nawilżanie (zewnątrzpochodny kwas hialuronowy ma znaczące właściwości higroskopijne – wypełnia przestrzeń pomiędzy włóknami kolagenowymi macierzy komórkowej ograniczając utratę wody, dzięki czemu nawilża naskórek i skórę właściwą)",
                    "Poprawa kolorytu skóry (kwas hialuronowy przyczynia się do powstawania nowych naczyń krwionośnych, dzięki czemu skóra jest lepiej natleniona, zdrowsza i jaśniejsza)", 
                    "Przywrócenie równowagi jonowej (NCTF® przywraca równowagę jonową w komórkach zapewniając prawidłową syntezę białek skóry właściwej)",
                    "Stymulacja wzrostu komórkowego +147% (NCTF® stymuluje rozmnażanie młodych i starzejących się ludzkich fibroblastów podczas 72 godzinnej inkubacji, sprzyjając w ten sposób odnowie komórkowej)",
                    "Zwiększenie gęstości skóry właściwej +256% - (NCTF® stymuluje syntezę głównych składników macierzy pozakomórkowej, m.in. białek bogatych w prolinę (kolagen typ 1) podczas 72 godzinnej inkubacji",
                    "Ochrona komórkowa +90% - (składniki aktywne NCTF® ograniczają produkcję szkodliwych dla skóry wolnych rodników, zapobiegają powstawaniu nadtlenku wodoru i tworzeniu lipidowych grup ponadtlenkowych)",
                    "Regeneracja wiskoelastyczna +366% - (NCTF® oddziałuje na gen inhibitora elastazy, przez co wpływa na przywrócenie sprężystości komórek, zapobiega sztywnieniu tkanek)"                    


                ],
                lists2: [
                    "Skóra pozbawiona elastyczności, odwodniona, ze zmarszczkami, o nierównym kolorycie",
                                                        
                ],
                 lists3: [
                    "3 zabiegi w odstępach 15 dni",
                    "następnie 2 zabiegi co miesiąc",
                    "w końcu faza podtrzymująca, czyli 1 zabieg co 3 miesiące",                                    
                ],
                lists4: [
                    "alergie",
                    "ciąża",
                    "cukrzyca (niewyrównana)", 
                    "stany zapalne skóry",
                    "opryszczka",
                    "skóra źle tolerująca iniekcje (skóra bardzo płytko unaczyniona lub z podatnością do powstawania bliznowców)",
                    "terapie lekami obniżającymi krzepliwość krwi",
                    "choroba nowotworowa",
                    "choroby o podłożu autoimmunologicznym"                                   
                ]
            }
        }
    };

    
</script>
