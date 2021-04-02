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
                            <b-tab title="Instructor">
                                <CourseInstructor />
                            </b-tab>
                            <b-tab title="Reviews">
                                <div class="course-reviews">
                                    <div class="course-rating">
                                        <h3 class="title">Reviews</h3>
                                        <div class="course-rating-content">
                                            <div class="average-rating">
                                                <p class="rating-title secondary-color">Average Rating</p>
                                                <div class="rating-box">
                                                    <div class="average-value primary-color">
                                                        4.50
                                                    </div>
                                                    <div class="review-star">
                                                        <div class="tm-star-rating">
                                                            <span class="fas fa-star"></span>
                                                            <span class="fas fa-star"></span>
                                                            <span class="fas fa-star"></span>
                                                            <span class="fas fa-star"></span>
                                                            <span class="fas fa-star-half-alt"></span>
                                                        </div>
                                                    </div>
                                                    <div class="review-amount">
                                                        (2 ratings)
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="detailed-rating">
                                                <p class="rating-title secondary-color">Detailed Rating</p>
                                                <div class="rating-box">
                                                    <div class="rating-rated-item">
                                                        <div class="rating-point">
                                                            <div class="tm-star-rating">
                                                                <span class="fas fa-star"></span>
                                                                <span class="fas fa-star"></span>
                                                                <span class="fas fa-star"></span>
                                                                <span class="fas fa-star"></span>
                                                                <span class="fas fa-star"></span>
                                                            </div>
                                                        </div>
                                                        <div class="rating-progress">
                                                            <div class="single-progress-bar">
                                                                <div class="progress">
                                                                    <div class="progress-bar" role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="rating-count">1</div>
                                                    </div>

                                                    <div class="rating-rated-item">
                                                        <div class="rating-point">
                                                            <div class="tm-star-rating">
                                                                <span class="fas fa-star"></span>
                                                                <span class="fas fa-star"></span>
                                                                <span class="fas fa-star"></span>
                                                                <span class="fas fa-star"></span>
                                                                <span class="far fa-star"></span>
                                                            </div>
                                                        </div>
                                                        <div class="rating-progress">
                                                            <div class="single-progress-bar">
                                                                <div class="progress">
                                                                    <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="rating-count">1</div>
                                                    </div>

                                                    <div class="rating-rated-item">
                                                        <div class="rating-point">
                                                            <div class="tm-star-rating">
                                                                <span class="fas fa-star"></span>
                                                                <span class="fas fa-star"></span>
                                                                <span class="fas fa-star"></span>
                                                                <span class="far fa-star"></span>
                                                                <span class="far fa-star"></span>
                                                            </div>
                                                        </div>
                                                        <div class="rating-progress">
                                                            <div class="single-progress-bar">
                                                                <div class="progress">
                                                                    <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="rating-count">0</div>
                                                    </div>

                                                    <div class="rating-rated-item">
                                                        <div class="rating-point">
                                                            <div class="tm-star-rating">
                                                                <span class="fas fa-star"></span>
                                                                <span class="fas fa-star"></span>
                                                                <span class="far fa-star"></span>
                                                                <span class="far fa-star"></span>
                                                                <span class="far fa-star"></span>
                                                            </div>
                                                        </div>
                                                        <div class="rating-progress">
                                                            <div class="single-progress-bar">
                                                                <div class="progress">
                                                                    <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="rating-count">0</div>
                                                    </div>

                                                    <div class="rating-rated-item">
                                                        <div class="rating-point">
                                                            <div class="tm-star-rating">
                                                                <span class="fas fa-star"></span>
                                                                <span class="far fa-star"></span>
                                                                <span class="far fa-star"></span>
                                                                <span class="far fa-star"></span>
                                                                <span class="far fa-star"></span>
                                                            </div>
                                                        </div>
                                                        <div class="rating-progress">
                                                            <div class="single-progress-bar">
                                                                <div class="progress">
                                                                    <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="rating-count">0</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="course-reviews-area">
                                        <ul class="course-reviews-list">
                                            <li class="review">
                                                <div class="review-container">
                                                    <div class="review-author">
                                                        <img src="/images/review-author/author1.jpeg" alt="author">
                                                    </div>
                                                    <div class="review-content">
                                                        <h4 class="title">ednawatson</h4>
                                                        <div class="review-stars-rated" title="5 out of 5 stars">
                                                            <div class="review-stars empty"></div>
                                                        </div>
                                                        <h5 class="review-title">Cover all my needs </h5>
                                                        <div class="review-text">
                                                            The course identify things we want to change and then figure out the things that need to be done to create the desired outcome. The course helped me in clearly define problems and generate a wider variety of quality solutions. Support more structures analysis of options leading to better decisions.
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
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
