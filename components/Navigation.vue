<template>
    <nav class="site-main-menu">
        <ul>
            <li>
                <n-link to="/">
                    <span class="menu-text">Home</span>
                </n-link>
              
            
            </li>
            <li>
                <n-link to="/o-mnie">
                    <span class="menu-text">O mnie</span>
                </n-link>
                
              
            </li>
            <li class="has-children">
                <n-link to="/zabiegi">
                    <span class="menu-text">Zabiegi</span>
                </n-link>
                <span class="menu-toggle">
                    <i class="far fa-angle-down"></i>
                </span>
                <ul class="sub-menu">
                  
                    <li>
                        <n-link to="/powiekszanie-ust">
                            <span class="menu-text">Powiększanie ust</span>
                        </n-link>
                    </li>
                    <li>
                        <n-link to="/bruksizm">
                            <span class="menu-text">Bruksizm</span>
                        </n-link>
                    </li>
                     <li>
                        <n-link to="/kwas-hialuronowy">
                            <span class="menu-text">Kwas hialuronowy</span>
                        </n-link>
                    </li>
                    <li>
                        <n-link to="/leczenie-nadpotliwosci">
                            <span class="menu-text">Leczenie Nadpotliwości</span>
                        </n-link>
                    </li>
                    
                      <li>
                        <n-link to="/mezoterapia">
                            <span class="menu-text">Mezoterapia</span>
                        </n-link>
                    </li>
                      <li>
                        <n-link to="/osocze-bogatoplytkowe">
                            <span class="menu-text">Osocze płytkowe</span>
                        </n-link>
                    </li>
                        <li>
                        <n-link to="/lifting-nicmi-PDO">
                            <span class="menu-text">Lifting nićmi PDO</span>
                        </n-link>
                    </li>
                       <li>
                        <n-link to="/botoks">
                            <span class="menu-text">Botoks</span>
                        </n-link>
                    </li>
                      <li>
                        <n-link to="/dr-cyj-hair-filler">
                            <span class="menu-text">DR. CYJ HAIR FILLER</span>
                        </n-link>
                    </li>
                </ul>
            </li>
            <li>
                        <n-link to="/cennik">
                            <span class="menu-text">Cennik</span>
                        </n-link>
            </li>
            <li>
                        <n-link to="/kontakt">
                            <span class="menu-text">Kontakt</span>
                        </n-link>
            </li>
           
        </ul>
    </nav>
</template>