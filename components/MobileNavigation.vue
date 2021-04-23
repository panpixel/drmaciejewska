<template>
    <div class="mobile-navigation">
        <nav class="offcanvas-navigation" id="offcanvas-navigation">
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

                <li class="menu-item-has-children">
                    <n-link to="/">Zabiegi</n-link>
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
                        <n-link to="/toksyna-botulinowa">
                            <span class="menu-text">Toksyna Botulinowa</span>
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
    </div>
</template>

<script>
    export default{
        name: 'MobileNavMenu',
        mounted() {
            const offCanvasNav = document.querySelector('#offcanvas-navigation');
            const offCanvasNavSubMenu = offCanvasNav.querySelectorAll('.sub-menu');
            const anchorLinks = offCanvasNav.querySelectorAll('a');
        
            for (let i = 0; i < offCanvasNavSubMenu.length; i++){
                offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
            }
        
            const menuExpand = offCanvasNav.querySelectorAll('.menu-expand');
            const numMenuExpand = menuExpand.length;
        
            for (let i = 0; i < numMenuExpand; i++) {
                menuExpand[i].addEventListener("click", (e) => {sideMenuExpand(e)});
            }
        
            for (let i = 0; i < anchorLinks.length; i++) {
                anchorLinks[i].addEventListener("click", () => {closeMobileMenu()});
            }

            const sideMenuExpand = (e) => {
                e.currentTarget.parentElement.classList.toggle('active');
            }
            const closeMobileMenu = () => {
                const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu');
                offcanvasMobileMenu.classList.remove('active');
            }
        }
    };
</script>

<style lang="scss">
    .offcanvas-navigation {
        ul {
            padding-left: 0;
            li {
                border-bottom: 1px solid rgba(255, 255, 255, 0.15);
                &.menu-item-has-children {
                    &.mega--title > {
                        a {
                            font-weight: 500;
                        }
                    }
                    .sub-menu {
                        height: 0;
                        opacity: 0;
                        transition: 0.3s;
                        visibility: hidden;
                    }
                    &.active > {
                        .sub-menu {
                            height: 100%;
                            opacity: 1;
                            visibility: visible;
                            padding-left: 0;
                        }
                    }
                }
                a {
                    color: $white;
                    font-size: 16px;
                    font-weight: 500;
                    padding: 10px 0;
                    display: block;
                    &:hover {
                        color: $primary;
                    }
                    .badge {
                        background-image: linear-gradient(45deg, #fe378c 0%, #fe5b34 100%);
                    }
                }
            }
        }

        ul {
            &.sub-menu {
                margin-left: 15px;
                transition: 0.4s;
                li {
                    list-style: none;
                    border: none;
                    a {
                        color: $white;
                        font-weight: 400;
                        &:hover {
                            color: $primary;
                        }
                    }
                    .sub-menu {
                        li {
                            a {
                                font-size: 13px;
                                padding: 5px 0;
                            }
                        }
                    }
                }
            }
            li {
                &.menu-item-has-children {
                    position: relative;
                    display: block;
                    a {
                        display: inline-block;
                    }

                    &.active > {
                        .menu-expand {
                            background-color: rgba($white, 0.2);
                            i {
                                &:before {
                                    transform: rotate(0);
                                }
                            }
                        }
                    }

                    .menu-expand {
                        top: 5px;
                        right: 0;
                        width: 35px;
                        height: 35px;
                        cursor: pointer;
                        line-height: 35px;
                        position: absolute;
                        text-align: center;
                        background-color: rgba($white, 0.1);
                        &:hover {
                            background-color: rgba($white, 0.2);
                        }

                        i {
                            display: block;
                            border-bottom: 1px solid $white;
                            position: relative;
                            width: 10px;
                            text-align: center;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            &:before {
                                width: 100%;
                                content: "";
                                border-bottom: 1px solid $white;
                                display: block;
                                position: absolute;
                                top: 0;
                                transform: rotate(90deg);
                                transition: 0.4s;
                            }
                        }
                    }
                }
            }
        }
    }
</style>