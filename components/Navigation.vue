<template>
    <nav class="site-main-menu">
        <ul>
            <li>
                <n-link to="/">
                    <span class="menu-text">Home</span>
                </n-link>
              
            
            </li>
            <li class="has-children">
                <n-link to="">
                    <span class="menu-text">Pages</span>
                </n-link>
                <span class="menu-toggle">
                    <i class="far fa-angle-down"></i>
                </span>
                <ul class="sub-menu">
                    <li>
                        <n-link to="/about-me">
                            <span class="menu-text">About Me</span>
                        </n-link>
                    </li>
                    <li>
                        <n-link to="/about-us-one">
                            <span class="menu-text">About Us 01</span>
                        </n-link>
                    </li>
                    <li>
                        <n-link to="/about-us-two">
                            <span class="menu-text">About Us 02</span>
                        </n-link>
                    </li>
                    <li>
                        <n-link to="/contact-me">
                            <span class="menu-text">Contact Me</span>
                        </n-link>
                    </li>
                    <li>
                        <n-link to="/contact-us">
                            <span class="menu-text">Contact Us</span>
                        </n-link>
                    </li>
                    <li>
                        <n-link to="/login-register">
                            <span class="menu-text">Login Register</span>
                        </n-link>
                    </li>
                </ul>
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
            <li class="has-children">
                <n-link to="">
                    <span class="menu-text">Event</span>
                </n-link>
                <span class="menu-toggle">
                    <i class="far fa-angle-down"></i>
                </span>
                <ul class="sub-menu">
                    <li>
                        <n-link to="/event/event">
                            <span class="menu-text">Events</span>
                        </n-link>
                    </li>
                    <li>
                        <n-link to="/event/event-details">
                            <span class="menu-text">Event Details</span>
                        </n-link>
                    </li>
                    <li>
                        <n-link to="/event/zoom-meetings">
                            <span class="menu-text">Zoom Meetings</span>
                        </n-link>
                    </li>
                </ul>
            </li>
            <li class="has-children">
                <n-link to="">
                    <span class="menu-text">Blogs</span>
                </n-link>
                <span class="menu-toggle">
                    <i class="far fa-angle-down"></i>
                </span>
                <ul class="sub-menu">
                    <li>
                        <n-link to="/blog/blog-grid">
                            <span class="menu-text">Blog Grid</span>
                        </n-link>
                    </li>
                    <li>
                        <n-link to="/blog/blog-classic">
                            <span class="menu-text">Blog Classic</span>
                        </n-link>
                    </li>
                    <li>
                        <n-link to="/blog/blog-details">
                            <span class="menu-text">Blog Details</span>
                        </n-link>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>