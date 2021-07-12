import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1e8402b7 = () => interopDefault(import('..\\pages\\about-me.vue' /* webpackChunkName: "pages/about-me" */))
const _532f15bc = () => interopDefault(import('..\\pages\\about-us-two.vue' /* webpackChunkName: "pages/about-us-two" */))
const _7196d78f = () => interopDefault(import('..\\pages\\botoks.vue' /* webpackChunkName: "pages/botoks" */))
const _7841974e = () => interopDefault(import('..\\pages\\bruksizm.vue' /* webpackChunkName: "pages/bruksizm" */))
const _3f37c29f = () => interopDefault(import('..\\pages\\business.vue' /* webpackChunkName: "pages/business" */))
const _19a7863a = () => interopDefault(import('..\\pages\\cennik.vue' /* webpackChunkName: "pages/cennik" */))
const _980041ec = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _57ba060f = () => interopDefault(import('..\\pages\\course-portal.vue' /* webpackChunkName: "pages/course-portal" */))
const _e406c86e = () => interopDefault(import('..\\pages\\distant-learning.vue' /* webpackChunkName: "pages/distant-learning" */))
const _1fd6b982 = () => interopDefault(import('..\\pages\\dr-cyj-hair-filler.vue' /* webpackChunkName: "pages/dr-cyj-hair-filler" */))
const _0fd3998e = () => interopDefault(import('..\\pages\\gym-coaching.vue' /* webpackChunkName: "pages/gym-coaching" */))
const _3ffd1d4a = () => interopDefault(import('..\\pages\\health-coaching.vue' /* webpackChunkName: "pages/health-coaching" */))
const _ef85893c = () => interopDefault(import('..\\pages\\kitchen-coach.vue' /* webpackChunkName: "pages/kitchen-coach" */))
const _702e4c91 = () => interopDefault(import('..\\pages\\kontakt.vue' /* webpackChunkName: "pages/kontakt" */))
const _2d879ece = () => interopDefault(import('..\\pages\\kwas-hialuronowy.vue' /* webpackChunkName: "pages/kwas-hialuronowy" */))
const _30f444c7 = () => interopDefault(import('..\\pages\\leczenie-nadpotliwosci.vue' /* webpackChunkName: "pages/leczenie-nadpotliwosci" */))
const _622ff7e6 = () => interopDefault(import('..\\pages\\lifting-nicmi-PDO.vue' /* webpackChunkName: "pages/lifting-nicmi-PDO" */))
const _759882b4 = () => interopDefault(import('..\\pages\\login-register.vue' /* webpackChunkName: "pages/login-register" */))
const _536f1d2c = () => interopDefault(import('..\\pages\\mezoterapia.vue' /* webpackChunkName: "pages/mezoterapia" */))
const _1d0f969f = () => interopDefault(import('..\\pages\\modern-schooling.vue' /* webpackChunkName: "pages/modern-schooling" */))
const _5964fb82 = () => interopDefault(import('..\\pages\\multimedia-pedagogy.vue' /* webpackChunkName: "pages/multimedia-pedagogy" */))
const _e120ef8c = () => interopDefault(import('..\\pages\\o-mnie.vue' /* webpackChunkName: "pages/o-mnie" */))
const _15cb30ee = () => interopDefault(import('..\\pages\\osocze-fibryna.vue' /* webpackChunkName: "pages/osocze-fibryna" */))
const _f0d4bb78 = () => interopDefault(import('..\\pages\\plasma-complex.vue' /* webpackChunkName: "pages/plasma-complex" */))
const _50e437cf = () => interopDefault(import('..\\pages\\powiekszanie-ust.vue' /* webpackChunkName: "pages/powiekszanie-ust" */))
const _3a134e72 = () => interopDefault(import('..\\pages\\remote-training.vue' /* webpackChunkName: "pages/remote-training" */))
const _2fd8fc8a = () => interopDefault(import('..\\pages\\zabiegi.vue' /* webpackChunkName: "pages/zabiegi" */))
const _5be84aa8 = () => interopDefault(import('..\\pages\\blog\\blog-classic.vue' /* webpackChunkName: "pages/blog/blog-classic" */))
const _29e8a750 = () => interopDefault(import('..\\pages\\blog\\blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _51a23320 = () => interopDefault(import('..\\pages\\blog\\blog-grid.vue' /* webpackChunkName: "pages/blog/blog-grid" */))
const _7842efac = () => interopDefault(import('..\\pages\\course\\become-a-teacher.vue' /* webpackChunkName: "pages/course/become-a-teacher" */))
const _3b08ed4a = () => interopDefault(import('..\\pages\\course\\course-details.vue' /* webpackChunkName: "pages/course/course-details" */))
const _68972be4 = () => interopDefault(import('..\\pages\\course\\courses-grid-one.vue' /* webpackChunkName: "pages/course/courses-grid-one" */))
const _32cd4146 = () => interopDefault(import('..\\pages\\course\\courses-grid-three.vue' /* webpackChunkName: "pages/course/courses-grid-three" */))
const _37c7ca18 = () => interopDefault(import('..\\pages\\course\\courses-grid-two.vue' /* webpackChunkName: "pages/course/courses-grid-two" */))
const _f9765108 = () => interopDefault(import('..\\pages\\course\\membership-levels.vue' /* webpackChunkName: "pages/course/membership-levels" */))
const _027ca9df = () => interopDefault(import('..\\pages\\course\\profile.vue' /* webpackChunkName: "pages/course/profile" */))
const _5c11aa9f = () => interopDefault(import('..\\pages\\event\\event.vue' /* webpackChunkName: "pages/event/event" */))
const _073672d8 = () => interopDefault(import('..\\pages\\event\\event-details.vue' /* webpackChunkName: "pages/event/event-details" */))
const _abfa4d52 = () => interopDefault(import('..\\pages\\event\\zoom-meetings.vue' /* webpackChunkName: "pages/event/zoom-meetings" */))
const _d5c1a0fa = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-me",
    component: _1e8402b7,
    name: "about-me"
  }, {
    path: "/about-us-two",
    component: _532f15bc,
    name: "about-us-two"
  }, {
    path: "/botoks",
    component: _7196d78f,
    name: "botoks"
  }, {
    path: "/bruksizm",
    component: _7841974e,
    name: "bruksizm"
  }, {
    path: "/business",
    component: _3f37c29f,
    name: "business"
  }, {
    path: "/cennik",
    component: _19a7863a,
    name: "cennik"
  }, {
    path: "/contact-us",
    component: _980041ec,
    name: "contact-us"
  }, {
    path: "/course-portal",
    component: _57ba060f,
    name: "course-portal"
  }, {
    path: "/distant-learning",
    component: _e406c86e,
    name: "distant-learning"
  }, {
    path: "/dr-cyj-hair-filler",
    component: _1fd6b982,
    name: "dr-cyj-hair-filler"
  }, {
    path: "/gym-coaching",
    component: _0fd3998e,
    name: "gym-coaching"
  }, {
    path: "/health-coaching",
    component: _3ffd1d4a,
    name: "health-coaching"
  }, {
    path: "/kitchen-coach",
    component: _ef85893c,
    name: "kitchen-coach"
  }, {
    path: "/kontakt",
    component: _702e4c91,
    name: "kontakt"
  }, {
    path: "/kwas-hialuronowy",
    component: _2d879ece,
    name: "kwas-hialuronowy"
  }, {
    path: "/leczenie-nadpotliwosci",
    component: _30f444c7,
    name: "leczenie-nadpotliwosci"
  }, {
    path: "/lifting-nicmi-PDO",
    component: _622ff7e6,
    name: "lifting-nicmi-PDO"
  }, {
    path: "/login-register",
    component: _759882b4,
    name: "login-register"
  }, {
    path: "/mezoterapia",
    component: _536f1d2c,
    name: "mezoterapia"
  }, {
    path: "/modern-schooling",
    component: _1d0f969f,
    name: "modern-schooling"
  }, {
    path: "/multimedia-pedagogy",
    component: _5964fb82,
    name: "multimedia-pedagogy"
  }, {
    path: "/o-mnie",
    component: _e120ef8c,
    name: "o-mnie"
  }, {
    path: "/osocze-fibryna",
    component: _15cb30ee,
    name: "osocze-fibryna"
  }, {
    path: "/plasma-complex",
    component: _f0d4bb78,
    name: "plasma-complex"
  }, {
    path: "/powiekszanie-ust",
    component: _50e437cf,
    name: "powiekszanie-ust"
  }, {
    path: "/remote-training",
    component: _3a134e72,
    name: "remote-training"
  }, {
    path: "/zabiegi",
    component: _2fd8fc8a,
    name: "zabiegi"
  }, {
    path: "/blog/blog-classic",
    component: _5be84aa8,
    name: "blog-blog-classic"
  }, {
    path: "/blog/blog-details",
    component: _29e8a750,
    name: "blog-blog-details"
  }, {
    path: "/blog/blog-grid",
    component: _51a23320,
    name: "blog-blog-grid"
  }, {
    path: "/course/become-a-teacher",
    component: _7842efac,
    name: "course-become-a-teacher"
  }, {
    path: "/course/course-details",
    component: _3b08ed4a,
    name: "course-course-details"
  }, {
    path: "/course/courses-grid-one",
    component: _68972be4,
    name: "course-courses-grid-one"
  }, {
    path: "/course/courses-grid-three",
    component: _32cd4146,
    name: "course-courses-grid-three"
  }, {
    path: "/course/courses-grid-two",
    component: _37c7ca18,
    name: "course-courses-grid-two"
  }, {
    path: "/course/membership-levels",
    component: _f9765108,
    name: "course-membership-levels"
  }, {
    path: "/course/profile",
    component: _027ca9df,
    name: "course-profile"
  }, {
    path: "/event/event",
    component: _5c11aa9f,
    name: "event-event"
  }, {
    path: "/event/event-details",
    component: _073672d8,
    name: "event-event-details"
  }, {
    path: "/event/zoom-meetings",
    component: _abfa4d52,
    name: "event-zoom-meetings"
  }, {
    path: "/",
    component: _d5c1a0fa,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
