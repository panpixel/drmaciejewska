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
                        <n-link to="/zabiegi/s">
                            <span class="menu-text">Zabieg  03</span>
                        </n-link>
                    </li>
                    <li>
                        <n-link to="/zabiegi/">
                            <span class="menu-text">Zabieg 03</span>
                        </n-link>
                    </li>
                    
                </ul>
            </li>
            <li>
                        <n-link to="/kontakt">
                            <span class="menu-text">Kontakt</span>
                        </n-link>
            </li>
           
        </ul>
    </nav>
</template>